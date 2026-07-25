import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "../config/env";
import { generateOTP, generateOTPExpiry } from "../utils/generateOTP";
import { sendVerificationEmail, sendWelcomeEmail } from "./email.service";
import { generateAccessToken } from "../utils/generateAccessToken";
import { generateRefreshToken } from "../utils/generateRefreshToken";


export const signup = async (
    fullName: string,
    email: string,
    password: string
) => {
    const existingUser = await User.findOne({ email }).select("_id");

    if (existingUser) {
        throw new Error("User already exists.");
    }

    const emailVerificationOTP = generateOTP();
    const emailVerificationOTPExpiry = generateOTPExpiry();

    const user = new User({
        fullName,
        email,
        password,
        emailVerificationOTP,
        emailVerificationOTPExpiry,
    });

    await user.save();

    try {
        await sendVerificationEmail(
            user.email,
            user.fullName,
            user.emailVerificationOTP!
        );
    } catch (error) {
        console.error("Verification email failed:", error);
    }

    return {
        user: {
            id: user._id.toString(),
            fullName: user.fullName,
            email: user.email,
            isVerified: user.isVerified,
        },
    };
};

export const verifyEmail = async (
    email: string,
    otp: string
) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found.");
    }

    if (user.isVerified) {
        throw new Error("Email already verified.");
    }

    if (!user.emailVerificationOTP) {
        throw new Error("Verification code not found.");
    }

    if (user.emailVerificationOTP !== otp) {
        throw new Error("Invalid verification code.");
    }

    if (
        !user.emailVerificationOTPExpiry ||
        user.emailVerificationOTPExpiry.getTime() < Date.now()
    ) {
        throw new Error("Verification code has expired.");
    }

    user.isVerified = true;
    user.emailVerificationOTP = null;
    user.emailVerificationOTPExpiry = null;

    await user.save();

    try {
        await sendWelcomeEmail(user.email, user.fullName);
    } catch (error) {
        console.error("Failed to send welcome email:", error);
    }

    return {
        user: {
            id: user._id.toString(),
            fullName: user.fullName,
            email: user.email,
            isVerified: user.isVerified,
        },
    };
};

export const resendVerificationOTP = async (email: string) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found.");
    }

    if (user.isVerified) {
        throw new Error("Email is already verified.");
    }

    const otp = generateOTP();
    const otpExpiry = generateOTPExpiry();

    user.emailVerificationOTP = otp;
    user.emailVerificationOTPExpiry = otpExpiry;

    await user.save();

    await sendVerificationEmail(
        user.email,
        user.fullName,
        otp
    );

    return {
        message: "Verification code sent successfully.",
    };
};

export const login = async (
    email: string,
    password: string
) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password.");
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        throw new Error("Invalid email or password.");
    }

    if (!user.isVerified) {
        throw new Error("Please verify your email before logging in.");
    }

    const accessToken = generateAccessToken({
        userId: user._id.toString(),
        role: user.role,
    });

    const refreshToken = generateRefreshToken({
        userId: user._id.toString(),
    });

    user.hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
    user.lastLogin = new Date();

    await user.save();

    return {
        user: {
            id: user._id.toString(),
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            isVerified: user.isVerified,
        },
        accessToken,
        refreshToken,
    };
};

export const refreshToken = async (
    token: string
) => {
    if (!token) {
        throw new Error("Refresh token is required.");
    }

    let decoded: jwt.JwtPayload;

    try {
        decoded = jwt.verify(
            token,
            env.JWT_REFRESH_SECRET
        ) as jwt.JwtPayload;
    } catch {
        throw new Error("Invalid or expired refresh token.");
    }

    const user = await User.findById(decoded.userId);

    if (!user) {
        throw new Error("User not found.");
    }

    if (!user.hashedRefreshToken) {
        throw new Error("Refresh token is invalid.");
    }

    const isValid = await bcrypt.compare(
        token,
        user.hashedRefreshToken
    );

    if (!isValid) {
        throw new Error("Refresh token is invalid.");
    }

    const newAccessToken = generateAccessToken({
        userId: user._id.toString(),
        role: user.role,
    });

    const newRefreshToken = generateRefreshToken({
        userId: user._id.toString(),
    });

    user.hashedRefreshToken = await bcrypt.hash(
        newRefreshToken,
        12
    );

    await user.save();

    return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
    };
};

export const logout = async (
    userId: string
) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found.");
    }

    user.hashedRefreshToken = null;

    await user.save();

    return {
        message: "Logged out successfully.",
    };
};
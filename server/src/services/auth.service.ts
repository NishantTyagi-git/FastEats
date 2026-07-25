import { User } from "../models/user.model";
import { generateOTP, generateOTPExpiry } from "../utils/generateOTP";
import { sendVerificationEmail, sendWelcomeEmail } from "./email.service";


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
import { Request, Response } from "express";
import { signup, verifyEmail, resendVerificationOTP, login, refreshToken, logout } from "../services/auth.service";
import { signupSchema, verifyEmailSchema, resendVerificationSchema, loginSchema } from "../schemas/auth.schema";

export const signupController = async (
    req: Request,
    res: Response
) => {
    try {
        const parsed = signupSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const { fullName, email, password } = parsed.data;

        const user = await signup(fullName, email, password);

        return res.status(201).json({
            success: true,
            message: "Signup successful. Please verify your email.",
            data: user,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const verifyEmailController = async (
    req: Request,
    res: Response
) => {
    try {
        const parsed = verifyEmailSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const { email, otp } = parsed.data;

        const data = await verifyEmail(email, otp);

        return res.status(200).json({
            success: true,
            message: "Email verified successfully.",
            data,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const resendVerificationOTPController = async (
    req: Request,
    res: Response
) => {
    try {
        const parsed = resendVerificationSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const { email } = parsed.data;

        const data = await resendVerificationOTP(email);

        return res.status(200).json({
            success: true,
            message: "Verification code sent successfully.",
            data,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const loginController = async (
    req: Request,
    res: Response
) => {
    try {
        const parsed = loginSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const { email, password } = parsed.data;

        const data = await login(email, password);

        res.cookie("accessToken", data.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000,
        });

        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 14 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            data: {
                user: data.user,
                accessToken: data.accessToken,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const refreshTokenController = async (
    req: Request,
    res: Response
) => {
    try {
        const token = req.cookies.refreshToken;

        const data = await refreshToken(token);

        res.cookie("accessToken", data.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000,
        });

        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 14 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            accessToken: data.accessToken,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(401).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const logoutController = async (
    req: Request,
    res: Response
) => {
    try {
        await logout(req.user!.userId);

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");

        return res.status(200).json({
            success: true,
            message: "Logged out successfully.",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
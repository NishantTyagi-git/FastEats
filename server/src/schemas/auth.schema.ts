import { z } from "zod";

const fullNameSchema = z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters.")
    .max(50, "Full name cannot exceed 50 characters.");

const emailSchema = z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .toLowerCase();

const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password cannot exceed 64 characters.");

// Signup
export const signupSchema = z.object({
    fullName: fullNameSchema,
    email: emailSchema,
    password: passwordSchema,
});

export type SignupInput = z.infer<typeof signupSchema>;

// Login
export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export type LoginInput = z.infer<typeof loginSchema>;

// Verify Email
export const verifyEmailSchema = z.object({
    email: emailSchema,
    otp: z
        .string()
        .trim()
        .length(6, "OTP must be exactly 6 digits.")
        .regex(/^\d+$/, "OTP must contain only digits."),
});

export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;

// Forgot Password
export const forgotPasswordSchema = z.object({
    email: emailSchema,
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

// Reset Password
export const resetPasswordSchema = z.object({
    email: emailSchema,
    otp: z
        .string()
        .trim()
        .length(6, "OTP must be exactly 6 digits.")
        .regex(/^\d+$/, "OTP must contain only digits."),
    password: passwordSchema,
});

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

// Resend OTP
export const resendVerificationSchema = z.object({
    email: emailSchema,
});

export type ResendVerificationInput = z.infer<typeof resendVerificationSchema>;
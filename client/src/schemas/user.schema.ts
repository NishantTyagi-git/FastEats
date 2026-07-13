import { z } from "zod";

const emailSchema = z
  .email("Please enter a valid email address.")
  .trim()
  .toLowerCase();

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long.")
  .max(64, "Password cannot exceed 64 characters.")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
  .regex(/\d/, "Password must contain at least one number.");

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number.");

const fullNameSchema = z
  .string()
  .trim()
  .min(3, "Full name must be at least 3 characters.")
  .max(50, "Full name cannot exceed 50 characters.")
  .regex(/^[A-Za-z\s]+$/, "Full name can only contain letters and spaces.");

// SignUp Schema

export const signupSchema = z
  .object({
    fullName: fullNameSchema,
    email: emailSchema,
    phoneNumber: phoneSchema,
    password: passwordSchema,
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignupInput = z.infer<typeof signupSchema>;

// Login Schema

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required.")
});

export type LoginInput = z.infer<typeof loginSchema>;

// Forgot Password Schema

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export type ForgotPasswordInput = z.infer<
  typeof forgotPasswordSchema
>;

// Reset Password Schema

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordInput = z.infer<
  typeof resetPasswordSchema
>;

// Verify Email Schema

export const verifyEmailSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits.")
    .regex(/^\d+$/, "OTP must contain only numbers."),
});

export type VerifyEmailInput = z.infer<
  typeof verifyEmailSchema
>;
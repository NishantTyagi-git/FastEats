import { z } from "zod";

const fullNameSchema = z
  .string()
  .trim()
  .min(3, "Full name must be at least 3 characters")
  .max(50, "Full name cannot exceed 50 characters")
  .regex(/^[A-Za-z\s]+$/, "Full name can only contain letters and spaces");

const emailSchema = z
  .string()
  .trim()
  .email("Please enter a valid email address")
  .toLowerCase();

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(64, "Password is too long")


// SignUp Schema

export const signupSchema = z.object({
  fullName: fullNameSchema,
  email: emailSchema,
  password: passwordSchema
})


export type SignupInput = z.infer<typeof signupSchema>;

// Login Schema

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
});

export type LoginInput = z.infer<typeof loginSchema>;

// Forgot Password Schema

export const forgotPasswordSchema = z.object({
  email: emailSchema
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

// Reset Password Schema

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  confirmPassword: z.string()
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
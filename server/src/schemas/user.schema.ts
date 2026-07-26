import { z } from "zod";

export const updateProfileSchema = z
    .object({
        fullName: z
            .string()
            .trim()
            .min(3, "Full name must be at least 3 characters.")
            .max(50, "Full name cannot exceed 50 characters.")
            .optional(),

        contact: z
            .string()
            .trim()
            .regex(
                /^[0-9]{10}$/,
                "Contact number must be exactly 10 digits."
            )
            .optional(),

        address: z
            .object({
                street: z
                    .string()
                    .trim()
                    .max(100, "Street cannot exceed 100 characters.")
                    .optional(),

                city: z
                    .string()
                    .trim()
                    .max(50, "City cannot exceed 50 characters.")
                    .optional(),

                country: z
                    .string()
                    .trim()
                    .max(50, "Country cannot exceed 50 characters.")
                    .optional(),
            })
            .optional(),
    })
    .refine(
        (data) =>
            data.fullName !== undefined ||
            data.contact !== undefined ||
            data.address !== undefined,
        {
            message: "At least one field must be provided.",
        }
    );

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
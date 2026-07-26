import { Request, Response } from "express";
import { getCurrentUser, updateProfile } from "../services/user.service";
import { updateProfileSchema } from "../schemas/user.schema";

export const getCurrentUserController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await getCurrentUser(req.user.userId);

        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({
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

export const updateProfileController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const parsed = updateProfileSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                errors: parsed.error.flatten().fieldErrors,
            });
        }

        const user = await updateProfile(
            req.user.userId,
            parsed.data
        );

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully.",
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
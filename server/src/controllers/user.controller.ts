import { Request, Response } from "express";
import { getCurrentUser } from "../services/user.service";

export const getCurrentUserController = async (
    req: Request,
    res: Response
) => {
    try {
        const user = await getCurrentUser(req.user!.userId);

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
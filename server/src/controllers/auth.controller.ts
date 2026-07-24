import { Request, Response } from "express";
import { signup } from "../services/auth.service";
import { signupSchema } from "../schemas/auth.schema";

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
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../config/env";

interface JwtUserPayload extends JwtPayload {
    userId: string;
    role: "user" | "admin";
}

declare global {
    namespace Express {
        interface Request {
            user?: JwtUserPayload;
        }
    }
}

export const protect = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token!,
            env.JWT_ACCESS_SECRET
        ) as unknown as JwtUserPayload;

        req.user = decoded;

        next();
    } catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};
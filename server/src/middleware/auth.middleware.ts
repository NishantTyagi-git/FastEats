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
    let token: string | undefined;

    const authHeader = req.headers.authorization;

    if (authHeader?.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    }

    if (!token) {
        token = req.cookies?.accessToken;
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            env.JWT_ACCESS_SECRET
        ) as JwtUserPayload;

        req.user = decoded;

        next();
    } catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};
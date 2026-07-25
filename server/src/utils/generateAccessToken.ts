import jwt from "jsonwebtoken";
import { env } from "../config/env";

interface AccessTokenPayload {
  userId: string;
  role: "user" | "admin";
}

export const generateAccessToken = (
  payload: AccessTokenPayload
): string => {
  const secret = env.JWT_ACCESS_SECRET;

  const expiresIn = env.JWT_ACCESS_EXPIRES_IN;

  return jwt.sign(payload, secret, {
    expiresIn: expiresIn as any,
  });
};
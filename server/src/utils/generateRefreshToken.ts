import jwt from "jsonwebtoken";
import { env } from "../config/env";

interface RefreshTokenPayload {
  userId: string;
}

export const generateRefreshToken = (
  payload: RefreshTokenPayload
): string => {
  const secret = env.JWT_REFRESH_SECRET;

  const expiresIn = env.JWT_REFRESH_EXPIRES_IN;

  return jwt.sign(payload, secret, {
    expiresIn: expiresIn as any,
  });
};
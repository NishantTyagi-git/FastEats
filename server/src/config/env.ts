import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  
  CLIENT_URL: process.env.CLIENT_URL!,

  MAILTRAP_TOKEN: process.env.MAILTRAP_TOKEN!,
  MAILTRAP_SENDER_EMAIL: process.env.MAILTRAP_SENDER_EMAIL!,
  EMAIL_USER: process.env.EMAIL_USER!,
  EMAIL_PASS: process.env.EMAIL_PASS!,

  MONGO_URI: process.env.MONGO_URI!,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN!,
};
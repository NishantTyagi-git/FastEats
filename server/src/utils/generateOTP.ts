import crypto from "crypto";

export const generateOTP = (length = 6): string => {
  if (length <= 0) throw new Error("OTP length must be greater than 0.");

  let otp = "";

  while (otp.length < length) {
    otp += crypto.randomInt(0, 10).toString();
  }

  return otp;
};

export const generateOTPExpiry = (minutes = 10): Date => {
  return new Date(Date.now() + minutes * 60 * 1000);
};
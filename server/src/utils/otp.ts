import crypto from "crypto";

export const generateOTP = (length = 6): string => {
  let otp = "";

  while (otp.length < length) {
    otp += crypto.randomInt(0, 10).toString();
  }

  return otp;
};
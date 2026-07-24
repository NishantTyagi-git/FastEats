import { User } from "../models/user.model";
import { generateOTP, generateOTPExpiry } from "../utils/generateOTP";

export const signup = async (
    fullName: string,
    email: string,
    password: string
) => {
    const existingUser = await User.findOne({ email }).select("_id");

    if (existingUser) {
        throw new Error("User already exists.");
    }

    const emailVerificationOTP = generateOTP();
    const emailVerificationOTPExpiry = generateOTPExpiry();

    const user = new User({
        fullName,
        email,
        password,
        emailVerificationOTP,
        emailVerificationOTPExpiry,
    });

    await user.save();

    return {
        user: {
            id: user._id.toString(),
            fullName: user.fullName,
            email: user.email,
            isVerified: user.isVerified,
        },
    };
};
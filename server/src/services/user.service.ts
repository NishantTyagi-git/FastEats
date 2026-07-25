import { User } from "../models/user.model";

export const getCurrentUser = async (userId: string) => {
    const user = await User.findById(userId).select(
        "-password -hashedRefreshToken -emailVerificationOTP -emailVerificationOTPExpiry -passwordResetOTP -passwordResetOTPExpiry -__v"
    );

    if (!user) {
        throw new Error("User not found.");
    }

    return {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        contact: user.contact,
        address: user.address,
        profilePicture: user.profilePicture,
        role: user.role,
        isVerified: user.isVerified,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
};
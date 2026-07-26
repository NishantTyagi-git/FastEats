import { User } from "../models/user.model";
import { UpdateProfileInput } from "../schemas/user.schema";

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

export const updateProfile = async (
    userId: string,
    data: UpdateProfileInput
) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found.");
    }

    if (data.fullName !== undefined) {
        user.fullName = data.fullName;
    }

    if (data.contact !== undefined) {
        user.contact = data.contact;
    }

    if (data.address) {
        if (data.address.street !== undefined) {
            user.address.street = data.address.street;
        }

        if (data.address.city !== undefined) {
            user.address.city = data.address.city;
        }

        if (data.address.country !== undefined) {
            user.address.country = data.address.country;
        }
    }

    await user.save();

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
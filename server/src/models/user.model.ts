import mongoose, { Document, Schema } from "mongoose";
export interface IUser extends Document {
        name: string;
        email: string;
        password: string;
        contact?: string;
        address?: {
            street?: string;
            city?: string;
            country?: string;

    };
    profilePicture?: string;
    role: "user" | "admin";
    lastLogin?: Date;
    isVerified: boolean;
    otp?: string;
    otpExpiry?: Date;
    resetPasswordToken?: string;
    resetPasswordTokenExpiry?: Date;
    createdAt: Date;
    updatedAt: Date;
}
const userSchema = new Schema<IUser>(
        {
            name: {
                type: String,
                required: true,
                trim: true,

        },
            email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                trim: true,

        },
            password: {
                type: String,
                required: true,

        },
            contact: {
                type: String,

        },
            address: {
                street: {
                    type: String,

            },
                city: {
                    type: String,

            },
                country: {
                    type: String,

            },
        },
            profilePicture: {
                type: String,
                default: "",

        },
            role: {
                type: String,
                enum: ["user", "admin"],
                default: "user",

        },
            lastLogin: {
                type: Date,

        },
            isVerified: {
                type: Boolean,
                default: false,

        },
            otp: {
                type: String,

        },
            otpExpiry: {
                type: Date,

        },
            resetPasswordToken: {
                type: String,

        },
            resetPasswordTokenExpiry: {
                type: Date,

        },
    },
        {
            timestamps: true,

    }

);
export const User = mongoose.model<IUser>("User", userSchema);
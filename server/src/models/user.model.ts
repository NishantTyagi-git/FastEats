import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
    fullName: string;
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

    emailVerificationOTP?: string;
    emailVerificationOTPExpiry?: Date;

    passwordResetOTP?: string;
    passwordResetOTPExpiry?: Date;

    comparePassword(candidatePassword: string): Promise<boolean>;

    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
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
            minlength: 8,
        },

        contact: {
            type: String,
            default: "",
        },

        address: {
            street: {
                type: String,
                default: "",
            },
            city: {
                type: String,
                default: "",
            },
            country: {
                type: String,
                default: "",
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

        emailVerificationOTP: {
            type: String,
            default: null,
        },

        emailVerificationOTPExpiry: {
            type: Date,
            default: null,
        },

        passwordResetOTP: {
            type: String,
            default: null,
        },

        passwordResetOTPExpiry: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// Hash password 
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12);
});

// Compare password
userSchema.methods.comparePassword = async function (
    candidatePassword: string
) {
    return bcrypt.compare(candidatePassword, this.password);
};

export const User =
    (mongoose.models.User as mongoose.Model<IUser>) ||
    mongoose.model<IUser>("User", userSchema);
import mongoose, { Schema, Types } from "mongoose";

export interface IAddress {
    userId: Types.ObjectId;
    label: "Home" | "Work" | "Other";
    name: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    isDefault: boolean;
}

const addressSchema = new Schema<IAddress>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        label: {
            type: String,
            enum: ["Home", "Work", "Other"],
            required: true,
            default: "Home",
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        street: {
            type: String,
            required: true,
            trim: true,
        },

        city: {
            type: String,
            required: true,
            trim: true,
        },

        state: {
            type: String,
            required: true,
            trim: true,
        },

        postalCode: {
            type: String,
            required: true,
            trim: true,
        },

        country: {
            type: String,
            required: true,
            trim: true,
            default: "India",
        },

        phone: {
            type: String,
            default: "",
            trim: true,
        },

        isDefault: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Address =
    (mongoose.models.Address as mongoose.Model<IAddress>) ||
    mongoose.model<IAddress>("Address", addressSchema);

export default Address;
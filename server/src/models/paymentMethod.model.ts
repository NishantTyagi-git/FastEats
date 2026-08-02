import mongoose, { Schema, Types } from "mongoose";

export type PaymentMethodType = "card" | "upi";

export interface IPaymentMethod {
    userId: Types.ObjectId;
    type: PaymentMethodType;

    // Card
    brand?: string;
    last4?: string;
    expiry?: string;

    // UPI
    upiId?: string;

    isDefault: boolean;

    createdAt: Date;
    updatedAt: Date;
}

const paymentMethodSchema = new Schema<IPaymentMethod>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        type: {
            type: String,
            enum: ["card", "upi"],
            required: true,
        },

        brand: {
            type: String,
            default: null,
        },

        last4: {
            type: String,
            default: null,
        },

        expiry: {
            type: String,
            default: null,
        },

        upiId: {
            type: String,
            default: null,
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

paymentMethodSchema.index({ userId: 1, isDefault: 1 });

const PaymentMethod =
    (mongoose.models.PaymentMethod as mongoose.Model<IPaymentMethod>) ||
    mongoose.model<IPaymentMethod>("PaymentMethod", paymentMethodSchema);

export default PaymentMethod;
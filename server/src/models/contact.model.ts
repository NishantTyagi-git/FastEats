import { Schema, model, Document } from "mongoose";

export interface IContact extends Document {
    name: string;
    email: string;
    subject: string;
    message: string;
    status: "unread" | "read" | "resolved";
    createdAt: Date;
    updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 150,
        },

        subject: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 150,
        },

        message: {
            type: String,
            required: true,
            trim: true,
            minlength: 10,
            maxlength: 2000,
        },

        status: {
            type: String,
            enum: ["unread", "read", "resolved"],
            default: "unread",
        },
    },
    {
        timestamps: true,
    }
);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
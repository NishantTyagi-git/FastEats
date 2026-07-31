import { Request, Response } from "express";

import Contact from "../models/contact.model";

export const createContactController = async (
    req: Request,
    res: Response
) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const trimmedName = String(name).trim();
        const trimmedEmail = String(email).trim().toLowerCase();
        const trimmedSubject = String(subject).trim();
        const trimmedMessage = String(message).trim();

        if (trimmedName.length < 2) {
            return res.status(400).json({
                success: false,
                message: "Name must contain at least 2 characters.",
            });
        }

        if (trimmedName.length > 100) {
            return res.status(400).json({
                success: false,
                message: "Name is too long.",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(trimmedEmail)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address.",
            });
        }

        if (trimmedSubject.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Subject must contain at least 3 characters.",
            });
        }

        if (trimmedMessage.length < 10) {
            return res.status(400).json({
                success: false,
                message: "Message must contain at least 10 characters.",
            });
        }

        if (trimmedMessage.length > 2000) {
            return res.status(400).json({
                success: false,
                message: "Message is too long.",
            });
        }

        const contact = await Contact.create({
            name: trimmedName,
            email: trimmedEmail,
            subject: trimmedSubject,
            message: trimmedMessage,
        });

        return res.status(201).json({
            success: true,
            message: "Your message has been sent successfully.",
            data: {
                id: contact._id,
            },
        });
    } catch (error) {
        console.error("Create contact error:", error);

        return res.status(500).json({
            success: false,
            message:
                "Something went wrong. Please try again later.",
        });
    }
};
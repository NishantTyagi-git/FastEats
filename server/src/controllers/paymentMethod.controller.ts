import { Request, Response } from "express";
import { Types } from "mongoose";

import PaymentMethod from "../models/paymentMethod.model";

const getUserId = (req: Request) => { return req.user?.userId; };

const getParam = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
};

export const getPaymentMethodsController = async (
    req: Request,
    res: Response
) => {
    try {
        const userId = getUserId(req);

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const methods = await PaymentMethod.find({
            userId,
        }).sort({
            isDefault: -1,
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            data: methods,
        });
    } catch (error) {
        console.error("Get payment methods error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch payment methods.",
        });
    }
};

export const addPaymentMethodController = async (
    req: Request,
    res: Response
) => {
    try {
        const userId = getUserId(req);

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const { type, brand, last4, expiry, upiId } = req.body;

        if (type !== "card" && type !== "upi") {
            return res.status(400).json({
                success: false,
                message: "Invalid payment method type.",
            });
        }

        if (type === "card") {
            if (typeof last4 !== "string" || !/^\d{4}$/.test(last4)) {
                return res.status(400).json({
                    success: false,
                    message: "Valid last 4 digits are required.",
                });
            }

            if (typeof expiry !== "string" || !expiry.trim()) {
                return res.status(400).json({
                    success: false,
                    message: "Expiry date is required.",
                });
            }

            const existingCount =
                await PaymentMethod.countDocuments({
                    userId,
                });

            const method = await PaymentMethod.create({
                userId,
                type: "card",
                brand: typeof brand === "string" && brand.trim()
                    ? brand.trim()
                    : "Card",
                last4,
                expiry: expiry.trim(),
                isDefault: existingCount === 0,
            });

            return res.status(201).json({
                success: true,
                message: "Payment method added successfully.",
                data: method,
            });
        }

        if (typeof upiId !== "string" || !/^[\w.-]+@[\w.-]+$/.test(upiId.trim())) {
            return res.status(400).json({
                success: false,
                message: "Valid UPI ID is required.",
            });
        }

        const existingCount = await PaymentMethod.countDocuments({ userId });

        const method = await PaymentMethod.create({
            userId,
            type: "upi",
            upiId: upiId.trim().toLowerCase(),
            isDefault: existingCount === 0,
        });

        return res.status(201).json({
            success: true,
            message: "Payment method added successfully.",
            data: method,
        });
    } catch (error) {
        console.error("Add payment method error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to add payment method.",
        });
    }
};

export const setDefaultPaymentMethodController = async (
    req: Request,
    res: Response
) => {
    try {
        const userId = getUserId(req);
        const methodId = getParam(req.params.id);

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        if (!methodId || !Types.ObjectId.isValid(methodId)) {
            return res.status(400).json({
                success: false,
                message: "Valid payment method ID is required.",
            });
        }

        const method = await PaymentMethod.findOne({
            _id: methodId,
            userId,
        });

        if (!method) {
            return res.status(404).json({
                success: false,
                message: "Payment method not found.",
            });
        }

        await PaymentMethod.updateMany(
            { userId },
            {
                $set: {
                    isDefault: false,
                },
            }
        );

        method.isDefault = true;

        await method.save();

        return res.status(200).json({
            success: true,
            message: "Default payment method updated.",
            data: method,
        });
    } catch (error) {
        console.error("Set default payment method error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to set default payment method.",
        });
    }
};

export const deletePaymentMethodController = async (
    req: Request,
    res: Response
) => {
    try {
        const userId = getUserId(req);
        const methodId = getParam(req.params.id);

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        if (
            !methodId ||
            !Types.ObjectId.isValid(methodId)
        ) {
            return res.status(400).json({
                success: false,
                message: "Valid payment method ID is required.",
            });
        }

        const method = await PaymentMethod.findOne({
            _id: methodId,
            userId,
        });

        if (!method) {
            return res.status(404).json({
                success: false,
                message: "Payment method not found.",
            });
        }

        const wasDefault = method.isDefault;

        await PaymentMethod.deleteOne({
            _id: methodId,
            userId,
        });

        if (wasDefault) {
            const nextMethod =
                await PaymentMethod.findOne({
                    userId,
                }).sort({
                    createdAt: 1,
                });

            if (nextMethod) {
                nextMethod.isDefault = true;
                await nextMethod.save();
            }
        }

        return res.status(200).json({
            success: true,
            message: "Payment method removed successfully.",
        });
    } catch (error) {
        console.error("Delete payment method error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete payment method.",
        });
    }
};
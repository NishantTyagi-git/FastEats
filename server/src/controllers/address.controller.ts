import { Request, Response } from "express";
import { Types } from "mongoose";

import Address from "../models/address.model";

export const getAddressesController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const addresses = await Address.find({
            userId: req.user.userId,
        }).sort({
            isDefault: -1,
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            data: addresses,
        });
    } catch (error) {
        console.error("Get addresses error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch addresses.",
        });
    }
};

export const addAddressController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const { label, name, street, city, state, postalCode, country, phone, isDefault } = req.body;

        if (!name || !street || !city || !state || !postalCode || !country) {
            return res.status(400).json({
                success: false,
                message: "Required address fields are missing.",
            });
        }

        if (label !== undefined && !["Home", "Work", "Other"].includes(label)) {
            return res.status(400).json({
                success: false,
                message: "Invalid address label.",
            });
        }

        const existingCount = await Address.countDocuments({ userId: req.user.userId });

        const shouldBeDefault = existingCount === 0 || isDefault === true;

        if (shouldBeDefault) {
            await Address.updateMany(
                {
                    userId: req.user.userId,
                },
                {
                    $set: {
                        isDefault: false,
                    },
                }
            );
        }

        const address = await Address.create({
            userId: req.user.userId,
            label: label || "Home",
            name,
            street,
            city,
            state,
            postalCode,
            country,
            phone: phone || "",
            isDefault: shouldBeDefault,
        });

        return res.status(201).json({
            success: true,
            message: "Address added successfully.",
            data: address,
        });
    } catch (error) {
        console.error("Add address error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to add address.",
        });
    }
};

export const updateAddressController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const addressId = Array.isArray(req.params.addressId)
            ? req.params.addressId[0]
            : req.params.addressId;

        if (!addressId || !Types.ObjectId.isValid(addressId)) {
            return res.status(400).json({
                success: false,
                message: "Valid addressId is required.",
            });
        }

        const address = await Address.findOne({ _id: addressId, userId: req.user.userId });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        const { label, name, street, city, state, postalCode, country, phone, isDefault } = req.body;

        if (label !== undefined && !["Home", "Work", "Other"].includes(label)) {
            return res.status(400).json({
                success: false,
                message: "Invalid address label.",
            });
        }

        if (label !== undefined) {
            address.label = label;
        }

        if (name !== undefined) {
            address.name = name;
        }

        if (street !== undefined) {
            address.street = street;
        }

        if (city !== undefined) {
            address.city = city;
        }

        if (state !== undefined) {
            address.state = state;
        }

        if (postalCode !== undefined) {
            address.postalCode = postalCode;
        }

        if (country !== undefined) {
            address.country = country;
        }

        if (phone !== undefined) {
            address.phone = phone;
        }

        if (isDefault === true) {
            await Address.updateMany(
                {
                    userId: req.user.userId,
                    _id: {
                        $ne: address._id,
                    },
                },
                {
                    $set: {
                        isDefault: false,
                    },
                }
            );

            address.isDefault = true;
        }

        await address.save();

        return res.status(200).json({
            success: true,
            message: "Address updated successfully.",
            data: address,
        });
    } catch (error) {
        console.error("Update address error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update address.",
        });
    }
};

export const deleteAddressController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const addressId = Array.isArray(req.params.addressId)
            ? req.params.addressId[0]
            : req.params.addressId;

        if (!addressId || !Types.ObjectId.isValid(addressId)) {
            return res.status(400).json({
                success: false,
                message: "Valid addressId is required.",
            });
        }

        const address = await Address.findOne({
            _id: addressId,
            userId: req.user.userId,
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        const wasDefault = address.isDefault;

        await address.deleteOne();

        if (wasDefault) {
            const nextAddress = await Address.findOne({
                userId: req.user.userId,
            }).sort({
                createdAt: 1,
            });

            if (nextAddress) {
                nextAddress.isDefault = true;
                await nextAddress.save();
            }
        }

        return res.status(200).json({
            success: true,
            message: "Address deleted successfully.",
        });
    } catch (error) {
        console.error("Delete address error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete address.",
        });
    }
};

export const setDefaultAddressController = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const addressId = Array.isArray(req.params.addressId)
            ? req.params.addressId[0]
            : req.params.addressId;

        if (!addressId || !Types.ObjectId.isValid(addressId)) {
            return res.status(400).json({
                success: false,
                message: "Valid addressId is required.",
            });
        }

        const address = await Address.findOne({
            _id: addressId,
            userId: req.user.userId,
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        await Address.updateMany(
            {
                userId: req.user.userId,
            },
            {
                $set: {
                    isDefault: false,
                },
            }
        );

        address.isDefault = true;

        await address.save();

        return res.status(200).json({
            success: true,
            message: "Default address updated.",
            data: address,
        });
    } catch (error) {
        console.error("Set default address error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to set default address.",
        });
    }
};
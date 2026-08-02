import { Request, Response } from "express";
import { Types } from "mongoose";

import Wishlist from "../models/wishlist.model";
import { Dish } from "../models/dish.model";

export const getWishlistController = async (
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

        const wishlist = await Wishlist.findOne({ userId: req.user.userId }).populate("items.dishId");

        if (!wishlist) {
            return res.status(200).json({
                success: true,
                data: {
                    items: [],
                },
            });
        }

        return res.status(200).json({
            success: true,
            data: wishlist,
        });
    } catch (error) {
        console.error("Get wishlist error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch wishlist.",
        });
    }
};

export const addToWishlistController = async (
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

        const { dishId } = req.body;

        if (!dishId || !Types.ObjectId.isValid(dishId)) {
            return res.status(400).json({
                success: false,
                message: "Valid dishId is required.",
            });
        }

        const dish = await Dish.findOne({
            _id: dishId,
            isAvailable: true,
        });

        if (!dish) {
            return res.status(404).json({
                success: false,
                message: "Dish not found or unavailable.",
            });
        }

        let wishlist = await Wishlist.findOne({
            userId: req.user.userId,
        });

        if (!wishlist) {
            wishlist = await Wishlist.create({
                userId: req.user.userId,
                items: [
                    {
                        dishId: dish._id,
                    },
                ],
            });
        } else {
            const alreadyExists = wishlist.items.some(
                (item) => item.dishId.toString() === dish._id.toString()
            );

            if (alreadyExists) {
                return res.status(409).json({
                    success: false,
                    message: "Dish is already in wishlist.",
                });
            }

            wishlist.items.push({ dishId: dish._id });

            await wishlist.save();
        }

        await wishlist.populate("items.dishId");

        return res.status(200).json({
            success: true,
            message: "Dish added to wishlist.",
            data: wishlist,
        });
    } catch (error) {
        console.error("Add wishlist error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to add dish to wishlist.",
        });
    }
};

export const removeFromWishlistController = async (
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

        const dishId = Array.isArray(req.params.dishId)
            ? req.params.dishId[0]
            : req.params.dishId;

        if (!dishId || !Types.ObjectId.isValid(dishId)) {
            return res.status(400).json({
                success: false,
                message: "Valid dishId is required.",
            });
        }

        const wishlist = await Wishlist.findOne({ userId: req.user.userId });

        if (!wishlist) {
            return res.status(404).json({
                success: false,
                message: "Wishlist not found.",
            });
        }

        const itemExists = wishlist.items.some(
            (item) => item.dishId.toString() === dishId
        );

        if (!itemExists) {
            return res.status(404).json({
                success: false,
                message: "Dish is not in the wishlist.",
            });
        }

        wishlist.items = wishlist.items.filter(
            (item) => item.dishId.toString() !== dishId
        );

        await wishlist.save();
        await wishlist.populate("items.dishId");

        return res.status(200).json({
            success: true,
            message: "Dish removed from wishlist.",
            data: wishlist,
        });
    } catch (error) {
        console.error("Remove wishlist error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to remove dish from wishlist.",
        });
    }
};

export const clearWishlistController = async (
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

        const wishlist = await Wishlist.findOne({ userId: req.user.userId });

        if (!wishlist) {
            return res.status(200).json({
                success: true,
                message: "Wishlist is already empty.",
                data: {
                    items: [],
                },
            });
        }

        wishlist.items = [];

        await wishlist.save();

        return res.status(200).json({
            success: true,
            message: "Wishlist cleared successfully.",
            data: wishlist,
        });
    } catch (error) {
        console.error("Clear wishlist error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to clear wishlist.",
        });
    }
};
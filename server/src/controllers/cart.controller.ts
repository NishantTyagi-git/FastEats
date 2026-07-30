import { Request, Response } from "express";
import { Types } from "mongoose";

import Cart from "../models/cart.model";
import { Dish } from "../models/dish.model";

export const getCartController = async (
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

        const cart = await Cart.findOne({
            userId: req.user.userId,
        }).populate("items.dishId");

        if (!cart) {
            return res.status(200).json({
                success: true,
                data: {
                    items: [],
                },
            });
        }

        return res.status(200).json({
            success: true,
            data: cart,
        });
    } catch (error) {
        console.error("Get cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch cart.",
        });
    }
};

export const addToCartController = async (
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

        const { dishId, quantity = 1 } = req.body;

        if (!dishId || !Types.ObjectId.isValid(dishId)) {
            return res.status(400).json({
                success: false,
                message: "Valid dishId is required.",
            });
        }

        if (!Number.isInteger(quantity) || quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1.",
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

        let cart = await Cart.findOne({
            userId: req.user.userId,
        });

        if (!cart) {
            cart = await Cart.create({
                userId: req.user.userId,
                items: [
                    {
                        dishId: dish._id,
                        quantity,
                    },
                ],
            });
        } else {
            const existingItem = cart.items.find(
                (item) =>
                    item.dishId.toString() ===
                    dish._id.toString()
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push({
                    dishId: dish._id,
                    quantity,
                });
            }

            await cart.save();
        }

        await cart.populate("items.dishId");

        return res.status(200).json({
            success: true,
            message: "Dish added to cart.",
            data: cart,
        });
    } catch (error) {
        console.error("Add to cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to add dish to cart.",
        });
    }
};

export const updateCartItemController = async (
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
        const { quantity } = req.body;

        if (!dishId || !Types.ObjectId.isValid(dishId)) {
            return res.status(400).json({
                success: false,
                message: "Valid dishId is required.",
            });
        }

        if (!Number.isInteger(quantity) || quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1.",
            });
        }

        const cart = await Cart.findOne({
            userId: req.user.userId,
        });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found.",
            });
        }

        const item = cart.items.find(
            (item) => item.dishId.toString() === dishId
        );

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Dish is not in the cart.",
            });
        }

        item.quantity = quantity;

        await cart.save();
        await cart.populate("items.dishId");

        return res.status(200).json({
            success: true,
            message: "Cart updated successfully.",
            data: cart,
        });
    } catch (error) {
        console.error("Update cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update cart.",
        });
    }
};


export const removeFromCartController = async (
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

        const cart = await Cart.findOne({
            userId: req.user.userId,
        });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found.",
            });
        }

        const itemExists = cart.items.some(
            (item) => item.dishId.toString() === dishId
        );

        if (!itemExists) {
            return res.status(404).json({
                success: false,
                message: "Dish is not in the cart.",
            });
        }

        cart.items = cart.items.filter(
            (item) => item.dishId.toString() !== dishId
        );

        await cart.save();
        await cart.populate("items.dishId");

        return res.status(200).json({
            success: true,
            message: "Dish removed from cart.",
            data: cart,
        });
    } catch (error) {
        console.error("Remove from cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to remove dish from cart.",
        });
    }
};


export const clearCartController = async (
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

        const cart = await Cart.findOne({
            userId: req.user.userId,
        });

        if (!cart) {
            return res.status(200).json({
                success: true,
                message: "Cart is already empty.",
                data: {
                    items: [],
                },
            });
        }

        cart.items = [];

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Cart cleared successfully.",
            data: cart,
        });
    } catch (error) {
        console.error("Clear cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to clear cart.",
        });
    }
};
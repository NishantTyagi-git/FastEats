import { Request, Response } from "express";
import { Dish } from "../models/dish.model";

export const getDishes = async (
    req: Request,
    res: Response
) => {
    try {
        const { category } = req.query;

        const filter: {
            isAvailable: boolean;
            category?: string;
        } = {
            isAvailable: true,
        };

        if (typeof category === "string" && category.trim()) {
            filter.category = category.trim();
        }

        const dishes = await Dish.find(filter).sort({
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            count: dishes.length,
            data: dishes,
        });
    } catch (error) {
        console.error("Failed to fetch dishes:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch dishes.",
        });
    }
};

export const getDishBySlug = async (
    req: Request<{ slug: string }>,
    res: Response
) => {
    try {
        const { slug } = req.params;

        const dish = await Dish.findOne({
            slug,
            isAvailable: true,
        });

        if (!dish) {
            return res.status(404).json({
                success: false,
                message: "Dish not found.",
            });
        }

        return res.status(200).json({
            success: true,
            data: dish,
        });
    } catch (error) {
        console.error("Failed to fetch dish:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch dish.",
        });
    }
};

export const getCategories = async (
    req: Request,
    res: Response
) => {
    try {
        const categories = await Dish.aggregate([
            {
                $match: {
                    isAvailable: true,
                },
            },
            {
                $group: {
                    _id: "$category",
                    count: {
                        $sum: 1,
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id",
                    count: 1,
                },
            },
            {
                $sort: {
                    category: 1,
                },
            },
        ]);

        return res.status(200).json({
            success: true,
            count: categories.length,
            data: categories,
        });
    } catch (error) {
        console.error("Failed to fetch categories:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch categories.",
        });
    }
};
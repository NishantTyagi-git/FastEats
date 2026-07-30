import mongoose, { Document, Schema } from "mongoose";

export interface IDish extends Document {
    slug: string;
    title: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    bestseller: boolean;
    veg: boolean;
    spicy: "Mild" | "Medium" | "Hot";
    preparationTime: string;
    description: string;

    images: string[];

    ingredients: string[];

    nutrition: {
        calories: number;
        protein: string;
        carbs: string;
        fat: string;
    };

    chefNote: string;

    isAvailable: boolean;

    createdAt: Date;
    updatedAt: Date;
}

const dishSchema = new Schema<IDish>(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },

        reviews: {
            type: Number,
            default: 0,
            min: 0,
        },

        bestseller: {
            type: Boolean,
            default: false,
        },

        veg: {
            type: Boolean,
            required: true,
        },

        spicy: {
            type: String,
            enum: ["Mild", "Medium", "Hot"],
            default: "Mild",
        },

        preparationTime: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        images: {
            type: [String],
            required: true,
            default: [],
        },

        ingredients: {
            type: [String],
            default: [],
        },

        nutrition: {
            calories: {
                type: Number,
                default: 0,
                min: 0,
            },

            protein: {
                type: String,
                default: "0g",
            },

            carbs: {
                type: String,
                default: "0g",
            },

            fat: {
                type: String,
                default: "0g",
            },
        },

        chefNote: {
            type: String,
            default: "",
            trim: true,
        },

        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Dish = mongoose.model<IDish>("Dish", dishSchema);
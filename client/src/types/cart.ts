import type { Dish } from "@/types/dish";

export type CartItem = {
    dishId: Dish;
    quantity: number;
};

export type Cart = {
    _id: string;
    userId: string;
    items: CartItem[];
    createdAt: string;
    updatedAt: string;
};
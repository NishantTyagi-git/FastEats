import type { Dish } from "@/types/dish";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getDishes(category?: string) {
    const url = new URL(`${API_URL}/api/dishes`);

    if (category && category !== "All") {
        url.searchParams.set("category", category);
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error("Failed to fetch dishes");
    }

    return response.json() as Promise<{
        success: boolean;
        count: number;
        data: Dish[];
    }>;
}

export async function getCategories() {
    const response = await fetch(`${API_URL}/api/dishes/categories`);

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json() as Promise<{
        success: boolean;
        count: number;
        data: {
            category: string;
            count: number;
        }[];
    }>;
}
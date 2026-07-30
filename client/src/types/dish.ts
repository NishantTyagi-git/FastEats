export type DishNutrition = {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
};

export type Dish = {
    _id: string;

    slug: string;
    title: string;
    category: string;

    price: number;
    rating: number;
    reviews: number;

    bestseller: boolean;
    veg: boolean;
    spicy: string;
    preparationTime: string;

    description: string;

    images: string[];

    ingredients: string[];

    nutrition: DishNutrition;

    chefNote: string;

    isAvailable: boolean;

    createdAt?: string;
    updatedAt?: string;
};
"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import type { Cart } from "@/types/cart";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type CartContextType = {
    cart: Cart | null;
    cartCount: number;
    isLoading: boolean;
    refreshCart: () => Promise<void>;
    addToCart: (
        dishId: string,
        quantity?: number
    ) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState<Cart | null>(null);
    const [cartCount, setCartCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const refreshCart = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/api/cart`, {
                credentials: "include",
                cache: "no-store",
            });

            if (!response.ok) {
                setCart(null);
                setCartCount(0);
                return;
            }

            const result = await response.json();

            if (!result.success || !result.data) {
                setCart(null);
                setCartCount(0);
                return;
            }

            const newCart: Cart = result.data;

            setCart(newCart);

            const totalQuantity = newCart.items.reduce((total, item) => total + item.quantity, 0);

            setCartCount(totalQuantity);
        } catch (error) {
            console.error("Failed to fetch cart:", error);
        }
    }, []);

    const addToCart = useCallback(
        async (dishId: string, quantity = 1) => {
            try {
                setIsLoading(true);

                const response = await fetch(
                    `${API_URL}/api/cart`,
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json",},
                        credentials: "include",
                        body: JSON.stringify({
                            dishId,
                            quantity,
                        }),
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(result.message ||"Failed to add item to cart.");
                }

                const updatedCart: Cart = result.data;

                setCart(updatedCart);

                const totalQuantity = updatedCart.items.reduce((total, item) => total + item.quantity, 0);

                setCartCount(totalQuantity);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        refreshCart();
    }, [refreshCart]);

    return (
        <CartContext.Provider value={{cart,cartCount,isLoading,refreshCart,addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
}
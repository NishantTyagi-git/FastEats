"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
    id: string;
    fullName: string;
    email: string;
    contact: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    profilePicture: string;
    role: "user" | "admin";
    isVerified: boolean;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    refreshUser: () => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = async () => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            setUser(null);
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/users/me",
                {
                    method: "GET",
                    headers: { Authorization: `Bearer ${accessToken}` },
                    credentials: "include",
                }
            );

            if (!response.ok) {
                localStorage.removeItem("accessToken");
                setUser(null);
                return;
            }

            const data = await response.json();

            setUser(data.data);
        } catch (error) {
            console.error("Failed to fetch current user:", error);
            setUser(null);
        }
    };

    useEffect(() => {
        const loadUser = async () => {
            setIsLoading(true);

            await refreshUser();

            setIsLoading(false);
        };

        loadUser();
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, refreshUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}
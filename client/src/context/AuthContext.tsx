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
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = async () => {
        try {
            let response = await fetch(
                "http://localhost:5000/api/users/me",
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            if (response.status === 401) {
                const refreshed = await refreshAccessToken();

                if (!refreshed) {
                    setUser(null);
                    return;
                }

                response = await fetch(
                    "http://localhost:5000/api/users/me",
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );
            }

            if (!response.ok) {
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

    const logout = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/logout",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                const data = await response.json();

                throw new Error(
                    data.message || "Logout failed."
                );
            }

            setUser(null);

            window.location.href = "/login";
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const refreshAccessToken = async (): Promise<boolean> => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/refresh-token",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                return false;
            }

            return true;
        } catch (error) {
            console.error("Failed to refresh access token:", error);
            return false;
        }
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
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/admin/layout/Sidebar";
import Topbar from "@/components/admin/layout/Topbar";
import NotFoundPage from "@/components/NotFoundPage";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;

        if (!user) {
            router.replace("/login");
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
        return null;
    }

    if (user.role !== "admin") {
        return <NotFoundPage />;
    }

    return (
        <div className="min-h-screen bg-[#0b0b0b]">
            <Sidebar />

            <main className="lg:ml-72">
                <Topbar />

                <div className="p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
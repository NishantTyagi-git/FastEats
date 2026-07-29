"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/store/layout/Navbar";
import Footer from "@/components/store/layout/Footer";
import { useAuth } from "@/context/AuthContext";

export default function StoreLayout({
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
      return;
    }

    if (user.role === "admin") {
      router.replace("/admin");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || user.role === "admin") {
    return null;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
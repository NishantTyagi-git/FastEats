"use client";

import { LogOut, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LogoutCard() {
    const { logout } = useAuth();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (isLoggingOut) return;

        try {
            setIsLoggingOut(true);
            await logout();
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <section className="mt-12 rounded-[32px] border border-red-500/20 bg-gradient-to-br from-[#151515] to-[#111111] p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-500/10">
                        <ShieldAlert
                            size={30}
                            className="text-red-500"
                        />
                    </div>

                    <div>
                        <p className="font-semibold uppercase tracking-[5px] text-red-500">Security</p>

                        <h2 className="mt-2 text-3xl font-black text-white">Logout from FastEats</h2>

                        <p className="mt-4 max-w-2xl leading-8 text-zinc-400">Logging out will end your current session. You can sign back in anytime using your email and password.</p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-red-500 px-8 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isLoggingOut ? (
                        <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Logging out...
                        </>
                    ) : (
                        <>
                            <LogOut size={20} />
                            Logout
                        </>
                    )}
                </button>
            </div>
        </section>
    );
}
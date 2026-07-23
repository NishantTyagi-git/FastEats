"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl font-black text-white">Welcome Back 👋</h1>

                <p className="mt-3 text-zinc-400">Sign in to continue managing your restaurant.</p>
            </div>

            <form className="mt-10 space-y-6">
                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-400">Email Address</label>

                    <div className="relative">
                        <Mail
                            size={18}
                            className="absolute top-1/2 left-5 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] pl-13 pr-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>
                <div>

                    <label className="mb-2 block text-sm font-medium text-zinc-400">
                        Password
                    </label>

                    <div className="relative">
                        <Lock
                            size={18}
                            className="absolute top-1/2 left-5 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] pl-13 pr-14 text-white outline-none transition focus:border-orange-500"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-5 -translate-y-1/2 text-zinc-500 hover:text-orange-500"
                        >
                            {showPassword ? (<EyeOff size={20} />) : (<Eye size={20} />)}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-zinc-400">
                        <input
                            type="checkbox"
                            className="h-4 w-4 accent-orange-500"
                        />
                        Remember me
                    </label>

                    <Link href="/forgotpassword" className="text-sm font-medium text-orange-500 transition hover:text-orange-400">
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600"
                >
                    Login
                </button>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10" />
                    </div>

                    <div className="relative flex justify-center">
                        <span className="bg-[#151515] px-4 text-sm text-zinc-500">or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <button type="button" className="h-12 rounded-2xl border border-white/10 bg-[#101010] font-semibold text-white transition hover:border-orange-500">
                        Google
                    </button>

                    <button type="button" className="h-12 rounded-2xl border border-white/10 bg-[#101010] font-semibold text-white transition hover:border-orange-500">
                        Apple
                    </button>

                    <button type="button" className="h-12 rounded-2xl border border-white/10 bg-[#101010] font-semibold text-white transition hover:border-orange-500">
                        GitHub
                    </button>
                </div>

                <p className="pt-2 text-center text-zinc-400">
                    Don't have an account?{" "}
                    <Link href="/signup" className="font-semibold text-orange-500 hover:text-orange-400">
                        Sign Up
                    </Link>
                </p>
            </form>
        </>
    );
}
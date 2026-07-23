"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="space-y-6">
            <div className="text-center">
                <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">Create Account</h1>

                <p className="mt-3 text-lg text-zinc-400">Join FastEats and start ordering your favorite meals.</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-400">
                        Full Name
                    </label>

                    <div className="relative">
                        <User
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="text"
                            placeholder="John Doe"
                            className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-400">
                        Email Address
                    </label>

                    <div className="relative">
                        <Mail
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-400">
                        Password
                    </label>

                    <div className="relative">
                        <Lock
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-14 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-orange-500"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-white/20 accent-orange-500"
                />

                <span className="text-zinc-400">
                    I agree to the{" "}
                    <Link href="/terms" className="font-medium text-orange-500 hover:text-orange-400">
                        Terms & Conditions
                    </Link>
                </span>
            </label>

            <button type="submit" className="h-13 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition hover:bg-orange-600">
                Create Account
            </button>

            <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-sm text-zinc-500">or continue with</span>

                <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-3 gap-3">
                <button type="button" className="h-13 rounded-xl border border-white/10 bg-[#111111] font-medium text-white transition hover:border-orange-500">
                    Google
                </button>

                <button type="button" className="h-13 rounded-xl border border-white/10 bg-[#111111] font-medium text-white transition hover:border-orange-500">
                    Apple
                </button>

                <button type="button" className="h-13 rounded-xl border border-white/10 bg-[#111111] font-medium text-white transition hover:border-orange-500">
                    GitHub
                </button>
            </div>

            <p className="pt-2 text-center text-zinc-400">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-orange-500 hover:text-orange-400">
                    Login
                </Link>
            </p>
        </form>
    );
}
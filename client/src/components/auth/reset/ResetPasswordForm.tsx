"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, Lock } from "lucide-react";

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form className="w-full max-w-[480px] space-y-6 px-10">
            <div>
                <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">Reset Password</h1>

                <p className="mt-3 text-lg text-zinc-400">Create a new password for your account.</p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-zinc-400">
                    New Password
                </label>

                <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-14 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-zinc-400">
                    Confirm Password
                </label>

                <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-14 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                    >
                        {showConfirmPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>
                </div>
            </div>

            <button type="submit" className="h-13 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition hover:bg-orange-600">
                Reset Password
            </button>

            <Link href="/login" className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-orange-500">
                <ArrowLeft size={18} />
                Back to Login
            </Link>
        </form>
    );
}
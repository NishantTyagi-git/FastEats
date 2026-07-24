"use client";

import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPasswordForm() {
    return (
        <form className="w-full max-w-[480px] px-10">
            <div>
                <h1 className="text-5xl font-black tracking-tight text-white">Forgot Password</h1>

                <p className="mt-4 text-lg leading-8 text-zinc-400">Enter your email and we'll send you a password reset link.</p>
            </div>

            <div className="mt-10">
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
                        className="h-14 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                    />
                </div>
            </div>

            <button type="submit" className="mt-10 h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition hover:bg-orange-600">
                Send Reset Link
            </button>

            <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-sm text-zinc-500">
                    or
                </span>

                <div className="h-px flex-1 bg-white/10" />
            </div>

            <Link href="/login" className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500">
                <ArrowLeft size={18} />
                Back to Login
            </Link>
        </form>
    );
}
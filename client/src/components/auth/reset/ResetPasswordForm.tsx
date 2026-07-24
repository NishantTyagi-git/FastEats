"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, Lock } from "lucide-react";
import { resetPasswordSchema } from "@/schemas/auth.schema";

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<{
        password?: string;
        confirmPassword?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = resetPasswordSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                password: fieldErrors.password?.[0],
                confirmPassword: fieldErrors.confirmPassword?.[0],
            });

            return;
        }

        setErrors({});

        console.log(result.data);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[480px] space-y-5 px-10">
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
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
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

                <p className="mt-1 min-h-[18px] text-xs text-red-500">{errors.password}</p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-zinc-400">
                    Confirm Password
                </label>

                <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

                    <input
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-14 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                    />

                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-orange-500"
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <p className="mt-1 min-h-[18px] text-xs text-red-500">{errors.confirmPassword}</p>
            </div>

            <button type="submit" className="h-13 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition hover:bg-orange-600">
                Reset Password
            </button>

            <Link href="/login" className="flex items-center justify-center gap-2 pt-2 text-sm font-medium text-zinc-400 transition hover:text-orange-500">
                <ArrowLeft size={18} />
                Back to Login
            </Link>
        </form>
    );
}
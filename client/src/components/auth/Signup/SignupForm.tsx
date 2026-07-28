"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupSchema } from "@/schemas/auth.schema";
import { signupUser } from "@/services/auth.service";

export default function SignupForm() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [acceptedToc, setAcceptedToc] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<{
        fullName?: string;
        email?: string;
        password?: string;
        general?: string;
    }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
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

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (isLoading) return;

        if (!acceptedToc) {
            setErrors({
                general: "Please accept the Terms & Conditions before continuing.",
            });

            return;
        }

        const result = signupSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                fullName: fieldErrors.fullName?.[0],
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
            });

            return;
        }

        setErrors({});
        setIsLoading(true);

        try {
            const response = await signupUser(result.data);

            console.log("Signup successful:", response);

            router.push(
                `/verifyemail?email=${encodeURIComponent(
                    result.data.email
                )}`
            );
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.";

            setErrors({
                general: message,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
                <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">Create Account</h1>

                <p className="mt-3 text-lg text-zinc-400">Join FastEats and start ordering your favorite meals.</p>
            </div>

            <div className="space-y-2">
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
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder="John Doe"
                            className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                        />
                    </div>

                    <p className="mt-2 min-h-[20px] text-sm text-red-500">{errors.fullName}</p>
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="john@example.com"
                            className="h-13 w-full rounded-xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
                        />
                    </div>

                    <p className="mt-2 min-h-[20px] text-sm text-red-500">{errors.email}</p>
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
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    <p className="mt-2 min-h-[20px] text-sm text-red-500">{errors.password}</p>
                </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                    type="checkbox"
                    checked={acceptedToc}
                    onChange={(e) => {
                        setAcceptedToc(e.target.checked);

                        if (e.target.checked) {
                            setErrors((prev) => ({
                                ...prev,
                                general: undefined,
                            }));
                        }
                    }}
                    className="h-5 w-5 rounded border-white/20 accent-orange-500"
                />

                <span className="text-zinc-400">
                    I agree to the{" "}
                    <Link href="/terms" className="font-medium text-orange-500 hover:text-orange-400">
                        Terms & Conditions
                    </Link>
                </span>
            </label>

            {errors.general && (
                <p className="mt-1 text-sm text-red-500">{errors.general}</p>
            )}

            <button type="submit" disabled={isLoading} className="h-13 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition-all duration-150 hover:bg-orange-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100">
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Creating Account...
                    </span>
                ) : (
                    "Create Account"
                )}
            </button>

            <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-sm text-zinc-500">
                    or continue with
                </span>

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
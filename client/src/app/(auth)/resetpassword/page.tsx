"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Eye, EyeOff, Loader2 } from "lucide-react";
import { resetPasswordSchema, ResetPasswordInput, } from "@/schemas/user.schema";

type ResetPasswordErrors = Partial<Record<keyof ResetPasswordInput, string[]>>;

const ResetPassword = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState<ResetPasswordInput>({
        password: "",
        confirmPassword: "",
    });

    const [validationErrors, setValidationErrors] = useState<ResetPasswordErrors>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setValidationErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const submitHandler = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const result = resetPasswordSchema.safeParse(formData);

        if (!result.success) {
            setValidationErrors(result.error.flatten().fieldErrors);
            return;
        }

        // try {
        //     setLoading(true);

        //     // await resetPassword(formData);

        //     router.push("/login");
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">
            <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-lg border">

                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold">
                        Reset Password
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Enter a new password for your FastEat account.
                    </p>
                </div>

                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <div className="relative">
                            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                            <Input
                                type={
                                    showPassword ? "text" : "password"
                                }
                                name="password"
                                value={formData.password}
                                onChange={changeEventHandler}
                                placeholder="New Password"
                                className="h-14 rounded-full pl-12 pr-12"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {validationErrors.password?.[0] && (
                            <p className="mt-2 ml-2 text-sm text-red-500">
                                {validationErrors.password[0]}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                            <Input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={changeEventHandler}
                                placeholder="Confirm Password"
                                className="h-14 rounded-full pl-12 pr-12"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        (prev) => !prev
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {validationErrors.confirmPassword?.[0] && (
                            <p className="mt-2 ml-2 text-sm text-red-500">
                                {
                                    validationErrors.confirmPassword[0]
                                }
                            </p>
                        )}
                    </div>

                    <Button type="submit" disabled={loading} className="h-14 w-full rounded-full text-base">
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Resetting...
                            </>
                        ) : (
                            "Reset Password"
                        )}
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Remember your password?{" "}
                        <Link href="/login" className="font-semibold text-orange hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ResetPassword;
"use client";

import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { loginSchema, LoginInput } from "src/schemas/user.schema";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
// import { useUserStore } from "src/store/useUserStore";

type LoginErrors = Partial<Record<keyof LoginInput, string[]>>;

const Login = () => {
    const router = useRouter();
    //   const { loading, login } = useUserStore();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState<LoginInput>({
        email: "",
        password: "",
    });

    const [validationErrors, setValidationErrors] =
        useState<LoginErrors>({});

    const changeEventHandler = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
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

    const loginSubmitHandler = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            setValidationErrors(result.error.flatten().fieldErrors);
            return;
        }

        // try {
        //   await login(formData);
        //   router.push("/");
        // } catch (error) {
        //   console.error(error);
        // }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">
            <div className="w-full max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
                        Login to your
                        <br />
                        <span className="text-orange">FastEat</span> Account
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Sign in to order your favourite meals, track deliveries and manage your
                        account.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-start">

                    <form onSubmit={loginSubmitHandler} className="space-y-5">

                        <div>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={changeEventHandler}
                                    placeholder="Email Address"
                                    autoComplete="email"
                                    className="h-14 rounded-full pl-12"
                                />
                            </div>

                            {validationErrors.email?.[0] && (
                                <p className="mt-2 ml-2 text-sm text-red-500">
                                    {validationErrors.email[0]}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="relative">
                                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={changeEventHandler}
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    className="h-14 rounded-full pl-12 pr-12"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>

                            {validationErrors.password?.[0] && (
                                <p className="mt-2 ml-2 text-sm text-red-500">
                                    {validationErrors.password[0]}
                                </p>
                            )}
                        </div>

                        <Button type="submit" className="h-14 w-full rounded-full text-base">
                            Sign In →
                        </Button>

                        <div className="text-center">
                            <Link href="/forgotpassword" className="text-sm text-muted-foreground hover:text-orange">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>

                    <div className="hidden md:flex items-center justify-center h-full">
                        <span className="text-3xl font-light text-muted-foreground">
                            /
                        </span>
                    </div>

                    <div className="space-y-5">

                        <Button variant="outline" disabled className="h-14 w-full justify-start gap-3 rounded-full">
                            <FcGoogle className="size-5" />
                            Continue with Google
                        </Button>

                        <Button variant="outline" disabled className="h-14 w-full justify-start gap-3 rounded-full">
                            <FaApple className="size-5" />
                            Continue with Apple
                        </Button>

                        <Button variant="outline" disabled className="h-14 w-full justify-start gap-3 rounded-full">
                            <FaGithub className="size-5" />
                            Continue with GitHub
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                            OAuth login coming soon
                        </p>
                    </div>

                </div>

                <div className="mt-14 text-center">
                    <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" className="font-semibold text-orange hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
"use client";

import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { signupSchema, SignupInput } from "src/schemas/user.schema";
import { Eye, EyeOff, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
// import { useUserStore } from "src/store/useUserStore";

type SignupErrors = Partial<Record<keyof SignupInput, string[]>>;

const Signup = () => {
  const router = useRouter();
  //   const { loading, login } = useUserStore();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<SignupInput>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] =
    useState<SignupErrors>({});

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

  const signupSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const result = signupSchema.safeParse(formData);

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-orange/5 px-6 py-10">
      <div className="w-full max-w-4xl rounded-3xl border bg-background p-8 shadow-xl">

        {/* Header */}

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Create your{" "}
            <span className="text-orange">FastEat</span> Account
          </h1>

          <p className="mt-3 text-muted-foreground">
            Order food faster, track deliveries and save your favourite meals.
          </p>
        </div>

        <form onSubmit={signupSubmitHandler} className="space-y-6">

          {/* Full Name + Phone */}

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={changeEventHandler}
                  placeholder="Full Name"
                  className="h-14 rounded-xl pl-12"
                />
              </div>

              {validationErrors.fullName?.[0] && (
                <p className="mt-2 text-sm text-red-500">
                  {validationErrors.fullName[0]}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                <Input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={changeEventHandler}
                  placeholder="Phone Number"
                  className="h-14 rounded-xl pl-12"
                />
              </div>

              {validationErrors.phoneNumber?.[0] && (
                <p className="mt-2 text-sm text-red-500">
                  {validationErrors.phoneNumber[0]}
                </p>
              )}
            </div>

          </div>

          {/* Email */}

          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={changeEventHandler}
                placeholder="Email Address"
                className="h-14 rounded-xl pl-12"
              />
            </div>

            {validationErrors.email?.[0] && (
              <p className="mt-2 text-sm text-red-500">
                {validationErrors.email[0]}
              </p>
            )}
          </div>

          {/* Passwords */}

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={changeEventHandler}
                  placeholder="Password"
                  className="h-14 rounded-xl pl-12 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {validationErrors.password?.[0] && (
                <p className="mt-2 text-sm text-red-500">
                  {validationErrors.password[0]}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                <Input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={changeEventHandler}
                  placeholder="Confirm Password"
                  className="h-14 rounded-xl pl-12 pr-12"
                />
              </div>

              {validationErrors.confirmPassword?.[0] && (
                <p className="mt-2 text-sm text-red-500">
                  {validationErrors.confirmPassword[0]}
                </p>
              )}
            </div>

          </div>

          {/* Submit */}

          <Button
            type="submit"
            className="h-14 w-full rounded-xl text-base bg-orange hover:bg-hoverOrange"
          >
            Create Account
          </Button>

          {/* Divider */}

          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">
              OR CONTINUE WITH
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Social */}

          <div className="flex justify-center gap-4">

            <Button
              variant="outline"
              size="icon"
              disabled
              className="size-14 rounded-xl"
            >
              <FcGoogle className="size-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              disabled
              className="size-14 rounded-xl"
            >
              <FaGithub className="size-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              disabled
              className="size-14 rounded-xl"
            >
              <FaApple className="size-6" />
            </Button>

          </div>

        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-orange hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
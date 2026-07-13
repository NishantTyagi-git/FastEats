"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { forgotPasswordSchema, ForgotPasswordInput, } from "@/schemas/user.schema";

type ForgotPasswordErrors = Partial<Record<keyof ForgotPasswordInput, string[]>>;

const ForgotPassword = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState<ForgotPasswordInput>({
      email: "",
    });

  const [validationErrors, setValidationErrors] = useState<ForgotPasswordErrors>({});

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

    const result =forgotPasswordSchema.safeParse(formData);

    if (!result.success) {
      setValidationErrors(result.error.flatten().fieldErrors);
      return;
    }

    // try {
    //   setLoading(true);

    //   // await forgotPassword(formData);

    //   router.push("/verifyemail");
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">
      <div className="w-full max-w-lg rounded-3xl border bg-white p-10 shadow-lg">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Forgot Password
          </h1>

          <p className="mt-3 text-muted-foreground">
            Enter your registered email address and we'll send you a password reset link.
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={changeEventHandler}
                autoComplete="email"
                placeholder="Email Address"
                className="h-14 rounded-full pl-12"
              />
            </div>

            {validationErrors.email?.[0] && (
              <p className="mt-2 ml-2 text-sm text-red-500">
                {validationErrors.email[0]}
              </p>
            )}
          </div>

          <Button type="submit" disabled={loading} className="h-14 w-full rounded-full text-base">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Reset Link"
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

export default ForgotPassword;
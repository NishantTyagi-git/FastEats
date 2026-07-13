"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ShieldCheck } from "lucide-react";
import {verifyEmailSchema,VerifyEmailInput} from "@/schemas/user.schema";

// import { useUserStore } from "@/store/useUserStore";

type VerifyEmailErrors = Partial<Record<keyof VerifyEmailInput, string[]>>;

const VerifyEmail = () => {
  const router = useRouter();

  // const { loading, verifyEmail } = useUserStore();

  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState(["","","","","",""]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [validationErrors, setValidationErrors] = useState<VerifyEmailErrors>({});

  const handleChange = (
    index: number,
    value: string
  ) => {
    // Only allow numbers
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Clear previous validation error
    setValidationErrors({});

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const newOtp = [...otp];

    pasted.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pasted.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const submitHandler = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const verificationCode = otp.join("");

    const result = verifyEmailSchema.safeParse({
      otp: verificationCode,
    });

    if (!result.success) {
      setValidationErrors(
        result.error.flatten().fieldErrors
      );
      return;
    }

    // try {
    //   setLoading(true);

    //   // await verifyEmail(verificationCode);

    //   router.push("/login");
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
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange/10">
            <ShieldCheck className="h-8 w-8 text-orange" />
          </div>

          <h1 className="text-4xl font-bold">
            Verify Email
          </h1>

          <p className="mt-3 text-muted-foreground">
            Enter the 6-digit verification code sent to your email address.
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-8">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="h-14 w-14 rounded-xl text-center text-xl font-bold"
              />
            ))}
          </div>

          {validationErrors.otp?.[0] && (
            <p className="text-center text-sm text-red-500">
              {validationErrors.otp[0]}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="h-14 w-full rounded-full text-base"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify Email"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button type="button" className="text-sm font-semibold text-orange hover:underline">
            Resend Code
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Back to{" "}
            <Link href="/login" className="font-semibold text-orange hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
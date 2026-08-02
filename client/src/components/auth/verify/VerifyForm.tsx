"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Clock3 } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyForm() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") || "";

  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    if (!email) {
      setError("Email address is missing.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(
        `${API_URL}/api/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Email verification failed."
        );
      }

      console.log("Email verified:", data);

      router.push("/");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (timeLeft > 0 || isResending || !email) return;

    setError("");
    setIsResending(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(
        `${API_URL}/api/auth/resend-verification-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to resend verification code."
        );
      }

      setOtp("");

      setTimeLeft(300);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="w-full max-w-[480px] px-10">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">Verify Email</h1>

        <p className="mt-3 text-lg text-zinc-400">We've sent a verification code to</p>

        <p className="mt-2 break-all text-xl font-semibold text-white">{email}</p>

        <p className="mt-3 text-zinc-400">Enter the 6-digit verification code below.</p>
      </div>

      <div className="pb-6 pt-8">
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={(value) => {
            setOtp(value);
            if (error) setError("");
          }}
          pattern={REGEXP_ONLY_DIGITS}
          inputMode="numeric"
          autoComplete="one-time-code"
          containerClassName="w-full"
        >
          <InputOTPGroup className="flex w-full justify-between gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="h-14 w-14 rounded-xl border border-white/10 bg-[#111111] text-xl font-bold text-white transition-all duration-200 data-[active=true]:border-orange-500 data-[active=true]:ring-2 data-[active=true]:ring-orange-500/20"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        {error && (<p className="mt-3 text-sm font-medium text-red-500">{error}</p>)}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-400">
          <Clock3
            size={18}
            className="text-orange-500"
          />

          <span>Expires in</span>

          {timeLeft > 0 ? (
            <span className={`font-semibold ${timeLeft <= 30 ? "text-red-500" : "text-orange-500"}`}>
              {minutes}:{seconds}
            </span>
          ) : (
            <span className="font-semibold text-red-500">
              Expired
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleResend}
          disabled={timeLeft > 0 || isResending}
          className="text-sm font-medium text-orange-500 transition-all duration-150 hover:text-orange-400 active:scale-95 disabled:cursor-not-allowed disabled:text-zinc-600 disabled:active:scale-100"
        >
          {isResending ? "Sending..." : "Resend Code"}
        </button>
      </div>

      <button
        type="button"
        onClick={handleVerify}
        disabled={isLoading}
        className="mt-8 h-13 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition-all duration-150 hover:bg-orange-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Verifying...
          </span>
        ) : (
          "Verify Email"
        )}
      </button>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-sm text-zinc-500">or</span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

      <Link href="/login" className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500">
        <ArrowLeft size={18} />
        Back to Login
      </Link>
    </div>
  );
}
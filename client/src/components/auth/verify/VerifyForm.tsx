"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Clock3 } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function VerifyForm() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setError("");

    console.log("OTP:", otp);
  };

  return (
    <div className="w-full max-w-[480px] px-10">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">Verify Email</h1>

        <p className="mt-3 text-lg text-zinc-400">We've sent a verification code to</p>

        <p className="mt-2 break-all text-xl font-semibold text-white">nishanttyagi@gmail.com</p>

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

          <span className="font-semibold text-orange-500">04:59</span>
        </div>

        <button type="button" className="text-sm font-medium text-orange-500 transition hover:text-orange-400">
          Resend Code
        </button>
      </div>

      <button type="button" onClick={handleVerify} className="mt-8 h-13 w-full rounded-xl bg-orange-500 text-base font-semibold text-white transition hover:bg-orange-600">
        Verify Email
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
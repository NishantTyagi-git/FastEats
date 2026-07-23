"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState("");

  return (
    <main className="h-screen overflow-hidden bg-[#090909]">
      <div className="mx-auto flex min-h-screen max-w-[1700px]">
        <section className="flex w-full items-center px-8 py-12 lg:w-[45%] lg:px-20">
          <div className="mx-auto w-full max-w-[520px]">
            <h1 className="mt-8 text-5xl font-bold leading-tight text-white">
              Verify your<br /><span className="text-orange-500">Email Address</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">We've sent a verification code to</p>

            <p className="mt-2 break-all text-xl font-semibold text-white">nishanttyagi@gmail.com</p>

            <p className="mt-3 text-lg text-zinc-400">Enter the 6-digit code below to continue securely.</p>

            <div className="mx-auto w-full max-w-[520px] pt-8 pb-6">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                pattern={REGEXP_ONLY_DIGITS}
                inputMode="numeric"
                autoComplete="one-time-code"
                containerClassName="w-full"
              >
                <InputOTPGroup className="w-full justify-between">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock3 size={18} className="text-orange-500" />

                <span>Code expires in</span>

                <span className="font-semibold text-orange-500">04:59</span>
              </div>

              <button className="text-sm font-medium text-orange-500 transition hover:text-orange-400">Resend Code</button>
            </div>

            <button className="mt-8 flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-lg font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 active:translate-y-0">
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
        </section>

        <section className="relative hidden lg:flex lg:w-[55%] items-center justify-center overflow-hidden bg-[#0d0d0d]">
          <Image
            src="/images/auth/verify.png"
            alt="Verify Email Illustration"
            fill
            priority
            sizes="55vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-[#090909]" />

          <div className="absolute top-20 right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-orange-400/10 blur-[110px]" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090909] to-transparent" />
        </section>
      </div>
    </main>
  );
}
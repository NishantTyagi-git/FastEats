"use client";

import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const initialForm: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactPage() {
    const [form, setForm] = useState<FormData>(initialForm);

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (status === "sending") return;

        setStatus("sending");
        setErrorMessage("");

        try {
            const response = await fetch(
                `${API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                    "Failed to send your message."
                );
            }

            setStatus("success");
            setForm(initialForm);
        } catch (error) {
            console.error("Contact form error:", error);

            setStatus("error");

            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <main className="min-h-screen bg-[#0b0b0b] pb-32 pt-32 text-white">
            <section className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="font-semibold uppercase tracking-[5px] text-orange-500">Contact</p>

                    <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
                        We&apos;d love to{" "}
                        <span className="text-orange-500">hear from you.</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                        Have a question about your order, our menu, delivery, or anything else? Send us a message and our team will get back to you.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="rounded-[32px] border border-white/10 bg-[#151515] p-8 md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-500">Get in touch</p>

                        <h2 className="mt-3 text-3xl font-black">Let&apos;s talk.</h2>

                        <p className="mt-5 leading-7 text-zinc-400">Our team is here to help with any questions or concerns you may have.</p>

                        <div className="mt-10 space-y-7">
                            <ContactInfo
                                icon={<Mail size={20} />}
                                title="Email"
                                value="support@fasteats.com"
                            />

                            <ContactInfo
                                icon={<Phone size={20} />}
                                title="Phone"
                                value="+91 98765 43210"
                            />

                            <ContactInfo
                                icon={<MapPin size={20} />}
                                title="Location"
                                value="Ghaziabad, Uttar Pradesh, India"
                            />

                            <ContactInfo
                                icon={<Clock3 size={20} />}
                                title="Support Hours"
                                value="Mon – Sun · 10 AM – 10 PM"
                            />
                        </div>

                        <div className="mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
                                    <Clock3 size={20} />
                                </div>

                                <div>
                                    <h3 className="font-bold">Quick response</h3>

                                    <p className="mt-1 text-sm leading-6 text-zinc-400">We usually respond to messages within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-[#151515] p-8 md:p-10">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-500">Message us</p>

                            <h2 className="mt-3 text-3xl font-black">How can we help?</h2>
                        </div>

                        {status === "success" ? (
                            <div className="mt-12 flex min-h-[420px] flex-col items-center justify-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                                    <CheckCircle2
                                        size={42}
                                        className="text-emerald-500"
                                    />
                                </div>

                                <h3 className="mt-6 text-3xl font-black">Message sent!</h3>

                                <p className="mt-4 max-w-md leading-7 text-zinc-400">
                                    Thanks for reaching out. We&apos;ve received your message and our team will get back to you soon.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 rounded-full bg-orange-500 px-7 py-3 font-semibold transition hover:bg-orange-600"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FormField
                                        label="Name"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <FormField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <FormField
                                    label="Subject"
                                    name="subject"
                                    placeholder="What can we help you with?"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-zinc-300">
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        minLength={10}
                                        maxLength={2000}
                                        rows={7}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        className="w-full resize-none rounded-2xl border border-white/10 bg-[#0f0f0f] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
                                    />

                                    <p className="mt-2 text-right text-xs text-zinc-600">
                                        {form.message.length}/2000
                                    </p>
                                </div>

                                {status === "error" && (
                                    <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400">
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-orange-500 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactInfo({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                {icon}
            </div>

            <div>
                <p className="text-sm text-zinc-500">{title}</p>
                <p className="mt-1 font-medium text-white">{value}</p>
            </div>
        </div>
    );
}

function FormField({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    required?: boolean;
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-zinc-300"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f0f0f] px-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
            />
        </div>
    );
}
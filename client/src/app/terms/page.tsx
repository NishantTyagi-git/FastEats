import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const sections = [
    {
        id: "acceptance",
        title: "Acceptance of Terms",
    },
    {
        id: "account",
        title: "Accounts",
    },
    {
        id: "orders",
        title: "Orders & Availability",
    },
    {
        id: "payments",
        title: "Payments",
    },
    {
        id: "cancellations",
        title: "Cancellations & Refunds",
    },
    {
        id: "content",
        title: "Website Content",
    },
    {
        id: "liability",
        title: "Limitation of Liability",
    },
    {
        id: "changes",
        title: "Changes to Terms",
    },
    {
        id: "contact",
        title: "Contact Us",
    },
];

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-orange-500">
                        <ArrowLeft size={17} />
                        Back to Home
                    </Link>

                    <div className="mt-14 max-w-3xl">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10">
                                <FileText
                                    size={21}
                                    className="text-orange-500"
                                />
                            </div>

                            <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">Legal</span>
                        </div>

                        <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                            Terms &{" "}<span className="text-orange-500">Conditions</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                            Please take a moment to read these terms before using FastEats. They explain how our service works and what you can expect from us.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Last updated: July 2026</span>

                            <span className="flex items-center gap-2">
                                <ShieldCheck
                                    size={16}
                                    className="text-emerald-500"
                                />
                                Easy to understand
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-zinc-500">
                                On this page
                            </p>

                            <nav className="space-y-1 border-l border-white/10">
                                {sections.map((section) => (
                                    <a key={section.id} href={`#${section.id}`} className="block border-l border-transparent px-5 py-2.5 text-sm text-zinc-500 transition hover:border-orange-500 hover:text-white">
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <div className="max-w-3xl">
                        <div className="rounded-3xl border border-white/10 bg-[#111111] p-6 sm:p-8">
                            <div className="flex gap-4">
                                <CheckCircle2
                                    size={22}
                                    className="mt-1 shrink-0 text-orange-500"
                                />

                                <p className="leading-7 text-zinc-400">
                                    By accessing or using FastEats, you agree to follow these Terms & Conditions. If you do not agree with them, please do not use our services.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 space-y-14">
                            <LegalSection id="acceptance" number="01" title="Acceptance of Terms">
                                <p>
                                    These Terms & Conditions govern your use of the FastEats website, application, ordering services, and related features.
                                </p>

                                <p>
                                    By accessing FastEats, creating an account, or placing an order, you acknowledge that you have read, understood, and agreed to these terms.
                                </p>
                            </LegalSection>

                            <LegalSection id="account" number="02" title="Accounts">
                                <p>
                                    Certain FastEats features may require you to create an account. You agree to provide accurate and current information when registering.
                                </p>

                                <p>
                                    You are responsible for keeping your login credentials secure and for activity performed through your account.
                                </p>
                            </LegalSection>

                            <LegalSection id="orders" number="03" title="Orders & Availability">
                                <p>
                                    All orders are subject to product availability and confirmation.
                                </p>

                                <p>
                                    Menu items, prices, availability, preparation times, and estimated delivery times may change without prior notice.
                                </p>

                                <p>
                                    An order is considered confirmed only after FastEats accepts the order.
                                </p>
                            </LegalSection>

                            <LegalSection id="payments" number="04" title="Payments">
                                <p>
                                    You agree to provide accurate payment information when required to complete an order.
                                </p>

                                <p>
                                    The applicable charges will be displayed before you confirm your order. Additional fees, including delivery charges or applicable taxes, may be included in the final amount.
                                </p>
                            </LegalSection>

                            <LegalSection id="cancellations" number="05" title="Cancellations & Refunds">
                                <p>
                                    Cancellation and refund eligibility may depend on the current status of your order and the applicable FastEats refund policy.
                                </p>

                                <p>
                                    If you experience an issue with an order, please contact our support team as soon as possible.
                                </p>
                            </LegalSection>

                            <LegalSection id="content" number="06" title="Website Content">
                                <p>
                                    FastEats may contain text, images, graphics, logos, designs, and other content belonging to FastEats or its respective owners.
                                </p>

                                <p>
                                    You may not reproduce, distribute, modify, or commercially exploit our content without appropriate permission.
                                </p>
                            </LegalSection>

                            <LegalSection id="liability" number="07" title="Limitation of Liability">
                                <p>
                                    FastEats aims to provide reliable and accurate services, but we do not guarantee that the website will always be available, uninterrupted, or completely error-free.
                                </p>

                                <p>
                                    To the extent permitted by applicable law, FastEats will not be responsible for indirect or consequential losses arising from the use of our services.
                                </p>
                            </LegalSection>

                            <LegalSection id="changes" number="08" title="Changes to These Terms">
                                <p>
                                    We may update these Terms & Conditions from time to time to reflect changes to our services, policies, or legal requirements.
                                </p>

                                <p>
                                    When changes are made, the updated version will be published on this page together with the revised update date.
                                </p>
                            </LegalSection>

                            <LegalSection id="contact" number="09" title="Contact Us">
                                <p>
                                    If you have any questions about these Terms & Conditions or need help with an order, our team is here to help.
                                </p>

                                <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 font-semibold text-orange-500 transition hover:text-orange-400">
                                    Contact FastEats
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </LegalSection>
                        </div>

                        <div className="mt-16 rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent p-8 sm:p-10">
                            <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-500">
                                Need help?
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-white">
                                Have a question about our terms?
                            </h2>

                            <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                                Our team is happy to help clarify anything about FastEats and your orders.
                            </p>

                            <Link href="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600">
                                Contact Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function LegalSection({
    id,
    number,
    title,
    children,
}: {
    id: string;
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-28 border-b border-white/10 pb-14 last:border-0">
            <div className="flex items-start gap-5">
                <span className="pt-1 text-sm font-bold text-orange-500">{number}</span>

                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-zinc-400">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
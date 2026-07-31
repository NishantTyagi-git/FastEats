import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, LockKeyhole, ShieldCheck } from "lucide-react";

const sections = [
    {
        id: "information",
        title: "Information We Collect",
    },
    {
        id: "usage",
        title: "How We Use Information",
    },
    {
        id: "cookies",
        title: "Cookies & Technologies",
    },
    {
        id: "sharing",
        title: "Information Sharing",
    },
    {
        id: "security",
        title: "Data Security",
    },
    {
        id: "retention",
        title: "Data Retention",
    },
    {
        id: "rights",
        title: "Your Rights",
    },
    {
        id: "changes",
        title: "Changes to This Policy",
    },
    {
        id: "contact",
        title: "Contact Us",
    },
];

export default function PrivacyPage() {
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
                                <LockKeyhole
                                    size={21}
                                    className="text-orange-500"
                                />
                            </div>

                            <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">
                                Privacy
                            </span>
                        </div>

                        <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                            Privacy{" "}<span className="text-orange-500">Policy</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                            Your privacy matters to us. This policy explains what information FastEats may collect, how we use it, and the choices available to you.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                                Last updated: July 2026
                            </span>

                            <span className="flex items-center gap-2">
                                <ShieldCheck
                                    size={16}
                                    className="text-emerald-500"
                                />
                                Privacy focused
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-zinc-500">On this page</p>

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
                                    By using FastEats, you acknowledge that you have read and understood this Privacy Policy. We aim to collect only the information needed to provide and improve our services.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 space-y-14">
                            <LegalSection id="information" number="01" title="Information We Collect">
                                <p>
                                    Depending on how you use FastEats, we may collect information such as your name, email address, account information, delivery details, and order information.
                                </p>

                                <p>
                                    We may also collect information you provide when you contact our support team or interact with features of our website.
                                </p>
                            </LegalSection>

                            <LegalSection id="usage" number="02" title="How We Use Information">
                                <p>
                                    Information collected through FastEats may be used to create and manage your account, process orders, provide customer support, and improve our products and services.
                                </p>

                                <p>
                                    We may also use information to maintain website security, prevent misuse, and communicate important service-related information.
                                </p>
                            </LegalSection>

                            <LegalSection id="cookies" number="03" title="Cookies & Technologies">
                                <p>
                                    FastEats may use cookies or similar technologies to keep you signed in, maintain sessions, remember preferences, and provide essential website functionality.
                                </p>

                                <p>
                                    Some cookies may be necessary for the website to function correctly.
                                </p>
                            </LegalSection>

                            <LegalSection id="sharing" number="04" title="Information Sharing">
                                <p>
                                    We do not intend to sell your personal information.
                                </p>

                                <p>
                                    Information may be shared with trusted service providers when necessary to operate FastEats, process payments, provide delivery services, maintain infrastructure, or comply with legal obligations.
                                </p>
                            </LegalSection>

                            <LegalSection id="security" number="05" title="Data Security">
                                <div className="rounded-3xl border border-orange-500/10 bg-orange-500/5 p-6">
                                    <div className="flex gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                                            <LockKeyhole
                                                size={20}
                                                className="text-orange-500"
                                            />
                                        </div>

                                        <p className="leading-7 text-zinc-400">
                                            We take reasonable measures to protect information from unauthorized access, alteration, disclosure, or destruction.
                                        </p>
                                    </div>
                                </div>

                                <p>
                                    However, no internet-based service can guarantee complete security. You should also take reasonable steps to protect your account credentials.
                                </p>
                            </LegalSection>

                            <LegalSection id="retention" number="06" title="Data Retention">
                                <p>
                                    We may retain information for as long as reasonably necessary to provide our services, maintain business records, resolve disputes, enforce agreements, or comply with applicable legal requirements.
                                </p>
                            </LegalSection>

                            <LegalSection id="rights" number="07" title="Your Rights">
                                <p>
                                    Depending on applicable law, you may have rights regarding the personal information we hold about you.
                                </p>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <PrivacyPoint text="Request access to your information" />
                                    <PrivacyPoint text="Request correction of inaccurate information" />
                                    <PrivacyPoint text="Request deletion where applicable" />
                                    <PrivacyPoint text="Ask questions about our data practices" />
                                </div>
                            </LegalSection>

                            <LegalSection id="changes" number="08" title="Changes to This Policy">
                                <p>
                                    We may update this Privacy Policy when our services, practices, or legal requirements change.
                                </p>

                                <p>
                                    Any updated version will be published on this page along with a revised update date.
                                </p>
                            </LegalSection>

                            <LegalSection id="contact" number="09" title="Contact Us">
                                <p>
                                    If you have questions about this Privacy Policy or how FastEats handles your information, please contact our team.
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
                                <Eye
                                    size={22}
                                    className="text-white"
                                />
                            </div>

                            <h2 className="mt-6 text-3xl font-black text-white">
                                Questions about your privacy?
                            </h2>

                            <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                                If something about our privacy practices is unclear, reach out and we&apos;ll be happy to help.
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

function PrivacyPoint({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111111] p-4">
            <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-orange-500"
            />

            <span className="text-sm leading-6 text-zinc-400">{text}</span>
        </div>
    );
}
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock3, } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

const socials = [
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/oye.n1shant/",
    },
    {
        icon: FaFacebookF,
        href: "https://facebook.com",
    },
    {
        icon: FaXTwitter,
        href: "https://x.com",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#080808]">
            <div className="mx-auto max-w-7xl px-8 pt-16 pb-8">
                <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div>
                        <Image
                            src="/Logo.png"
                            alt="FastEat"
                            width={180}
                            height={60}
                            className="h-16 w-auto"
                        />

                        <p className="mt-8 max-w-sm leading-8 text-zinc-400">
                            Experience authentic Indian flavours crafted with premium ingredients, traditional recipes and unforgettable hospitality.
                        </p>

                        <div className="mt-8 flex gap-4">
                            {socials.map(({ icon: Icon, href }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-8 text-xl font-bold text-white">Quick Links</h3>

                        <div className="space-y-5">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-zinc-400 transition hover:translate-x-1 hover:text-orange-500"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-8 text-xl font-bold text-white">Contact</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin
                                    size={20}
                                    className="mt-1 shrink-0 text-orange-500"
                                />

                                <span className="text-zinc-400">Ghaziabad, Uttar Pradesh, India</span>
                            </div>

                            <div className="flex gap-4">
                                <Phone
                                    size={20}
                                    className="shrink-0 text-orange-500"
                                />

                                <span className="text-zinc-400">+91 77425 96946</span>
                            </div>

                            <div className="flex gap-4">
                                <Mail
                                    size={20}
                                    className="shrink-0 text-orange-500"
                                />
                                <span className="text-zinc-400">hello@fasteat.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-8 text-xl font-bold text-white">Opening Hours</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <Clock3
                                    size={20}
                                    className="shrink-0 text-orange-500"
                                />
                                <div>
                                    <p className="font-semibold text-white">Monday - Friday</p>
                                    <p className="text-zinc-400">10:00 AM - 10:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Clock3
                                    size={20}
                                    className="shrink-0 text-orange-500"
                                />

                                <div>
                                    <p className="font-semibold text-white">Saturday - Sunday</p>
                                    <p className="text-zinc-400">9:00 AM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-12 h-px bg-white/10" />

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

                    <p>© {new Date().getFullYear()} FastEat. All Rights Reserved.</p>

                    <div className="flex gap-8">

                        <Link
                            href="/privacy"
                            className="transition hover:text-orange-500"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-orange-500"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FastEats",
    template: "%s | FastEats",
  },
  description: "Order delicious food from your favorite restaurant with FastEats. Fresh meals, fast delivery, and a seamless ordering experience.",
  keywords: [ "FastEats", "Food Delivery", "Restaurant", "Online Ordering", "Fast Food",],
  authors: [{ name: "Hostrack Official" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
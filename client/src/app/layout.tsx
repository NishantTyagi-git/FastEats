import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FastEats",
    template: "%s | FastEats",
  },
  description: "Order delicious food from your favorite restaurant with FastEats. Fresh meals, fast delivery, and a seamless ordering experience.",
  keywords: ["FastEats", "Food Delivery", "Restaurant", "Online Ordering", "Fast Food",],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#0b0b0b] text-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
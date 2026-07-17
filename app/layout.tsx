import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UpWealth Magazine — For Entrepreneurs, By Entrepreneurs",
    template: "%s | UpWealth Magazine",
  },
  description:
    "UpWealth Magazine is a premier publication for entrepreneurs. Discover how to grow your net worth by growing your network.",
  openGraph: {
    title: "UpWealth Magazine",
    description: "For Entrepreneurs, By Entrepreneurs",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F5F7] text-[#1B1F3B] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

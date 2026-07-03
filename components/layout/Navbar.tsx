"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white to-white/0">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
          <Image src="/images/upwealth-logo.svg" alt="Logo" width={211} height={42} />
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-[48px]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg font-montserrat text-[16px] transition-all duration-200 inline-flex items-center justify-center select-none",
                  isActive
                    ? "nm-pressed-sm text-[#202020] font-medium"
                    : "text-[#202020] hover:text-[#C07708] bg-transparent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/login"
          className="border border-[#FFEDD0] px-6 py-2 nm-flat-sm hover:[box-shadow:var(--nm-inner)] hover:scale-[0.98] font-montserrat text-[#202020] text-[16px] font-medium hover:text-[#C07708] active:text-[#C07708] transition-all duration-300 ease-in-out inline-flex items-center justify-center select-none"
        >
          Log In
        </Link>
      </div>
    </header>
  );
}

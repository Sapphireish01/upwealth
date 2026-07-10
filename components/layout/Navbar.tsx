"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-white to-white/0">
      <div className="px-[18px] py-[18px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
          <Image src="/images/upwealth-logo.svg" alt="Logo" width={150} height={30} />
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-[15px]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2.5 rounded-lg font-montserrat text-[17px] font-medium transition-all duration-200 inline-flex items-center justify-center select-none",
                  isActive
                    ? "nm-pressed-sm hover:nm-pressed-sm text-[#000000]"
                    : "hover:[box-shadow:var(--nm-inner)] text-[#000000]"

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
          className="nm-flat-sm px-6 py-2 hover:[box-shadow:var(--nm-inner)] font-montserrat text-[#000000] text-[16px] font-semibold hover:text-[#C07708] active:text-[#C07708] transition-all duration-300 ease-in-out inline-flex items-center justify-center select-none"

        >
          Log In
        </Link>
      </div>
    </header>
  );
}

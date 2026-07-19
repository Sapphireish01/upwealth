"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-linear-to-b from-white to-white/0"
      )}
    >
      <div className="px-[18px] py-[18px] flex max-w-[1920px] mx-auto items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
          <Image src="/images/upwealth-logo.svg" alt="Logo" width={150} height={30} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-[15px]">
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

        {/* Desktop CTA */}
        <Link
          href="/login"
          className="hidden md:inline-flex nm-flat-sm px-6 py-2 hover:[box-shadow:var(--nm-inner)] font-montserrat text-[#000000] text-[16px] font-semibold hover:text-[#C07708] active:text-[#C07708] transition-all duration-300 ease-in-out items-center justify-center select-none"
        >
          Log In
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 bg-transparent transition-all flex items-center justify-center text-black"
        >
          {isOpen ? (
            <div className="w-8 h-8 relative flex items-center justify-center">
              <span
                className="w-full h-[3.5px] rounded-full bg-[#F0F0F3] absolute rotate-45 transition-transform duration-300"
                style={{
                  boxShadow: "-2px -2px 4px #FFFFFF, -6px -6px 12px #FFFFFF, 2px 2px 4px rgba(0, 0, 0, 0.45), 6px 6px 10px rgba(0, 0, 0, 0.4)"
                }}
              />
              <span
                className="w-full h-[3.5px] rounded-full bg-[#F0F0F3] absolute -rotate-45 transition-transform duration-300"
                style={{
                  boxShadow: "-2px -2px 4px #FFFFFF, -6px -6px 12px #FFFFFF, 2px 2px 4px rgba(0, 0, 0, 0.45), 6px 6px 10px rgba(0, 0, 0, 0.4)"
                }}
              />
            </div>
          ) : (
            <div className="w-8 h-6 flex flex-col justify-between items-center">
              <span
                className="w-full h-[3.5px] rounded-full bg-[#F0F0F3]"
                style={{
                  boxShadow: "-2px -2px 4px #FFFFFF, -6px -6px 12px #FFFFFF, 2px 2px 4px rgba(0, 0, 0, 0.45), 6px 6px 10px rgba(0, 0, 0, 0.4)"
                }}
              />
              <span
                className="w-full h-[3.5px] rounded-full bg-[#F0F0F3]"
                style={{
                  boxShadow: "-2px -2px 4px #FFFFFF, -6px -6px 12px #FFFFFF, 2px 2px 4px rgba(0, 0, 0, 0.45), 6px 6px 10px rgba(0, 0, 0, 0.4)"
                }}
              />
              <span
                className="w-full h-[3.5px] rounded-full bg-[#F0F0F3]"
                style={{
                  boxShadow: "-2px -2px 4px #FFFFFF, -6px -6px 12px #FFFFFF, 2px 2px 4px rgba(0, 0, 0, 0.45), 6px 6px 10px rgba(0, 0, 0, 0.4)"
                }}
              />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-[66px] left-0 right-0 mx-4 bg-[#F0F0F3] rounded-[16px] p-6 flex flex-col gap-4 shadow-[-5px_-5px_11.5px_#FFFFFF,5px_5px_8.5px_rgba(0,0,0,0.15)] border border-white/20 z-40"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-montserrat text-[17px] font-medium transition-all w-full flex items-center justify-center select-none",
                    isActive
                      ? "nm-pressed-sm text-[#000000]"
                      : "nm-flat-sm hover:[box-shadow:var(--nm-inner)] text-[#000000]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="nm-flat-sm w-full py-3 hover:[box-shadow:var(--nm-inner)] font-montserrat text-[#000000] text-[16px] font-semibold hover:text-[#C07708] active:text-[#C07708] transition-all flex items-center justify-center select-none mt-2"
            >
              Log In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

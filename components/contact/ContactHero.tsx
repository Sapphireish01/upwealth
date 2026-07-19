"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveGrid from "./InteractiveGrid";
import ContactForm from "./ContactForm";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function ContactHero() {
  return (
    <section className="bg-grid py-24 relative overflow-hidden">
      {/* Interactive Grid Background */}
      <InteractiveGrid />

      {/* Bottom fade overlay */}
      <div className="absolute inset-x-0 max-w-4xl mx-auto bottom-0 h-32 bg-linear-to-t from-[#F0F0F3] to-transparent pointer-events-none z-10" />

      {/* Form Card sliding up and fading in */}
      <div className="max-w-3xl mx-auto px-3 sm:px-6 relative z-20">
        {/* Large "UP" text displayed immediately on mount in the grid accent color (#BBD5FC) */}
        <motion.div
          initial={{ opacity: 1, scaleY: 0.95 }}
          animate={{ opacity: 0, scaleY: 1.05 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex items-center justify-center"
          style={{
            height: "calc(100% - 128px)", // Starts where form starts, ends 2 cells before end of form
            width: "350px", // Fixed width to ensure SVG displays correctly
            transformOrigin: "top center",
          }}
        >
          <svg
            viewBox="0 0 450 200"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <text
              x="225"
              y="165"
              textAnchor="middle"
              className="fill-[#BBD5FC] font-bold"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "200px",
                transform: "scale(1.25, 1.45)", // Stretch letters horizontally and vertically
                transformOrigin: "center 165px",
                letterSpacing: "0.18em", // Open up the spacing between letters
              }}
            >
              UP
            </text>
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[16px] p-[15px] sm:p-10"
          style={{
            background: "rgba(240, 240, 243, 0.7)",
            boxShadow: "-1px -1px 2px #FFFFFF, -5px -5px 11.5px #FFFFFF, 1px 1px 2px rgba(0, 0, 0, 0.25), 5px 5px 8.5px rgba(0, 0, 0, 0.25)"
          }}
        >
          <h1
            className="text-center mb-2 text-[#1B1F3B]"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
            }}
          >
            Contact Our Friendly Team
          </h1>
          <p className="text-center text-sm text-[#8E8E93] mb-8">
            Let us know how we can help
          </p>
          <ContactForm />
        </motion.div>
      </div>

      <ScrollIndicator
        href="#contact-methods"
        className="absolute bottom-50 right-6 md:right-32 z-20 hidden lg:block"
      />
    </section>
  );
}

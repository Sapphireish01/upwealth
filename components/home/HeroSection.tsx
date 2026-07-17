"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MAGAZINE_ISSUES } from "@/data";
import { ChevronDown } from "lucide-react";
import PodiumCarousel from "./PodiumCarousel";
import { SubscribeBtn } from "../ui/SubscribeBtn";
import ScrollIndicator from "../ui/ScrollIndicator";

// Top hero fan — first 5 issues
const HERO_COVERS = MAGAZINE_ISSUES.slice(0, 5);
const CAROUSEL_IMAGES = Array.from({ length: 5 }, (_, i) => `/images/carousel-${i + 1}.png`);
const CAROUSEL_ALTS = HERO_COVERS.map((issue) => issue.title);

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-12 bg-cover bg-center bg-no-repeat w-full overflow-hidden"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-[1920px] mx-auto w-full relative z-10 flex flex-col justify-center h-full px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full mt-[70px]">

          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start mt-0"
          >
            <h1
              className="uppercase text-5xl md:text-7xl lg:text-[100px] leading-[1.1] lg:leading-25 tracking-[1.7px] font-medium"
              style={{
                fontFamily: "var(--font-bebas-neue)",
              }}
            >
              <span className="text-black" style={{ textShadow: '0px 0px 1px rgba(0,0,0,0.3)' }}>DISCOVER THE LATEST<br />ISSUE OF </span>
              <span className="inline-block bg-linear-to-b from-[#D38D1A] from-40% to-[#343ADA] to-100% text-transparent bg-clip-text">UPWEALTH<br /></span>
              <span className="block bg-linear-to-b from-[#ac6b02] from-10% to-[#343ADA] to-40% text-transparent bg-clip-text">MAGAZINE</span>
            </h1>

            <p
              className="text-[#202020] text-sm md:text-base mt-5 leading-relaxed font-semibold"
              style={{ fontFamily: "var(--font-montserrat)", fontSize: '1rem', textShadow: '0 0 0.5px rgba(0,0,0,0.6)' }}
            >
              Stay informed with our insightful articles and expert advice.
            </p>

            <SubscribeBtn size="lg" className='mt-12' />
            {/* Scroll indicator - Aligned to left text */}
            <ScrollIndicator mt='6' />
          </motion.div>

          {/* Right — Podium Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-start justify-center mt-12 lg:mt-0 overflow-visible self-start"
          >
            <PodiumCarousel
              images={CAROUSEL_IMAGES}
              altTexts={CAROUSEL_ALTS}
              autoPlayInterval={3500}
            />
          </motion.div>
        </div>


      </div>
    </section>
  );
}

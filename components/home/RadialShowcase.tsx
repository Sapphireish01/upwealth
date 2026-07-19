"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FEATURED_ISSUE } from "@/data";
import { evenAngles } from "@/lib/utils";

export default function RadialShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const SPEED = 12;

    function step(timestamp: number) {
      if (!isHovered) {
        const delta = lastTimeRef.current ? (timestamp - lastTimeRef.current) / 1000 : 0;
        setRotation((prev) => (prev + SPEED * delta) % 360);
      }
      lastTimeRef.current = timestamp;
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovered]);

  const angles = evenAngles(4, rotation);

  return (
    <section
      id="radial"
      className="relative py-16 sm:py-24 lg:py-33 overflow-hidden mt-10 lg:mt-15 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Radial Background */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "url('/images/about%20us%20bg.png')",
          backgroundSize: "78% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="max-w-[1920px] mx-auto w-full relative z-10 px-6 xl:pl-[100px] xl:pr-[127px]">
        {/* Cascading Watermarks */}
        <div
          className="hidden lg:flex absolute w-full flex-col items-center pointer-events-none select-none z-0 font-[bebas_neue]"
          style={{ bottom: "137px", left: 0 }}
          aria-hidden
        >
          <div className="text-[72px] sm:text-[110px] md:text-[140px] lg:text-[170px]" style={{ color: "transparent", WebkitTextStroke: "1px #000000", opacity: 0.2, lineHeight: 1, }}>UPWEALTH</div>
          <div className="text-[72px] sm:text-[110px] md:text-[140px] lg:text-[170px]" style={{ color: "transparent", WebkitTextStroke: "1px #000000", opacity: 0.4, lineHeight: 1, }}>UPWEALTH</div>
          <div className="text-[72px] sm:text-[110px] md:text-[140px] lg:text-[170px]" style={{ color: "#E5E5E5", opacity: 1, lineHeight: 1, fontWeight: "bold" }}>UPWEALTH</div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative flex items-center justify-center h-[280px] sm:h-[360px] md:h-[480px] lg:h-[600px] overflow-visible">
            {/* Scale Container to wrap and shrink absolute layout proportionally on mobile/tablet */}
            <div className="relative flex items-center justify-center w-full h-[600px] scale-[0.48] sm:scale-[0.62] md:scale-80 lg:scale-100 origin-center transition-transform duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative z-20 w-72"
              >
                <div className="aspect-3/4 relative top-[68px] sm:top-[5px]" style={{ left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <img
                    src="/images/radial-1.png"
                    alt={FEATURED_ISSUE.coverAlt}
                    className="absolute  object-cover"
                  />
                </div>

                <div className="top-[-31%] sm:top-[-41%]" style={{ position: 'absolute', left: '0.92%', right: '-5%', bottom: '43.9%', background: '#F0F0F3', zIndex: -1 }}>
                  <svg width="395" height="512" viewBox="0 0 395 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                    <rect width="395" height="512" fill="#F0F0F3" />
                  </svg>
                </div>
              </motion.div>

              {/* Carousel 2 */}
              <div className="hidden lg:block absolute z-10" style={{ left: -32, top: 208 }}>
                <div className="w-28 magazine-cover" style={{ transform: "rotate(8.15deg)" }}>
                  <div className="aspect-3/4 bg-[#EBEBED] relative overflow-hidden shadow-cover">
                    <img src="/images/carousel-2.png" alt="Carousel 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Carousel 3 */}
              <div className="hidden lg:block absolute z-10" style={{ left: 205, top: (-47) }}>
                <div className="w-30 magazine-cover" style={{ transform: "rotate(-11deg)" }}>
                  <div className="aspect-3/4 bg-[#EBEBED] relative overflow-hidden shadow-cover">
                    <img src="/images/carousel-3.png" alt="Carousel 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Carousel 4 */}
              <div className="hidden lg:block absolute z-10" style={{ right: 213, top: (-72) }}>
                <div className="w-28 magazine-cover" style={{ transform: "rotate(-8.15deg)" }}>
                  <div className="aspect-3/4 bg-[#EBEBED] relative overflow-hidden shadow-cover">
                    <img src="/images/carousel-6.png" alt="Carousel 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Carousel 1 */}
              <div className="hidden lg:block absolute z-10" style={{ right: -33, top: 212 }}>
                <div className="w-28 magazine-cover" style={{ transform: "rotate(8.15deg)" }}>
                  <div className="aspect-3/4 bg-[#EBEBED] relative overflow-hidden shadow-cover">
                    <img src="/images/carousel-1.png" alt="Carousel 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

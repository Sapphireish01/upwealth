"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const W0 = 360, H0 = 481; // center — main card
const W1 = 298, H1 = 401; // ±1    — second place
const W2 = 30, H2 = 348; // ±2    — last place (thin strip)
const GAP = 40;          // Spacing to spread the carousel out wider

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface PodiumCarouselProps {
  images: string[];
  altTexts?: string[];
  autoPlayInterval?: number;
}

interface SlideTransform {
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  opacity: number;
  shadow: string;
}

function getTransform(offset: number): SlideTransform {
  const abs = Math.abs(offset);
  const sign = offset > 0 ? 1 : -1;

  // ── Center card ──────────────────────────────────────────────────────────
  if (offset === 0) {
    return {
      x: -W0 / 2,
      y: 0,
      width: W0,
      height: H0,
      zIndex: 50,
      opacity: 1,
      shadow: "0 28px 70px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.25)",
    };
  }

  // ── ±1 cards ─────────────────────────────────────────────────────────────
  if (abs === 1) {
    const x = sign > 0 ? W0 / 2 - W1 / 2 + GAP : -(W0 / 2 + W1 / 2) - GAP;
    return {
      x,
      y: -45,
      width: W1,
      height: H1,
      zIndex: 40,
      opacity: 1,
      shadow: "0 10px 30px rgba(0,0,0,0.20)",
    };
  }

  // ── ±2 cards (thin strips) ────────────────────────────────────────────────
  if (abs === 2) {
    const x = sign > 0 ? W0 / 2 + W1 / 2 + GAP * 2 : -(W0 / 2 + W1 / 2 + W2) - GAP * 2;
    return {
      x,
      y: -50,
      width: W2,
      height: H2,
      zIndex: 30,
      opacity: 0.9,
      shadow: "0 4px 14px rgba(0,0,0,0.14)",
    };
  }

  // ── Hidden / staging ──────────────────────────────────────────────────────
  const x = sign > 0 ? W0 / 2 + W1 / 2 + W2 + GAP * 2 + 40 : -(W0 / 2 + W1 / 2 + W2 + W2 + GAP * 2 + 40);
  return {
    x,
    y: -70,
    width: W2,
    height: H2,
    zIndex: 0,
    opacity: 0,
    shadow: "none",
  };
}

function circularOffset(index: number, active: number, total: number): number {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export default function PodiumCarousel({
  images,
  altTexts,
  autoPlayInterval = 3500,
}: PodiumCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(
    () => Math.floor(images.length / 2)
  );
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  const advance = useCallback(
    () => setActiveIndex((prev) => (prev + 1) % total),
    [total]
  );

  const retreat = useCallback(
    () => setActiveIndex((prev) => (prev - 1 + total) % total),
    [total]
  );

  // Auto-play — paused while hovered / focused
  useEffect(() => {
    if (hovered) return;
    const id = setInterval(advance, autoPlayInterval);
    return () => clearInterval(id);
  }, [advance, autoPlayInterval, hovered]);

  const springTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 85, damping: 20, mass: 1 };

  return (
    <div
      role="region"
      aria-label="Magazine cover carousel"
      className="relative select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      ref={containerRef}
    >

      <div
        className="relative w-full overflow-visible"
        style={{ height: H0 }}
      >
        {images.map((src, index) => {
          const offset = circularOffset(index, activeIndex, total);
          const tf = getTransform(offset);
          const isActive = offset === 0;
          const isHidden = Math.abs(offset) > 2;

          return (
            <motion.div
              key={src}
              aria-hidden={isHidden}
              style={{ position: "absolute", left: "50%", bottom: 0 }}
              animate={{
                x: tf.x,
                y: tf.y,
                width: tf.width,
                height: tf.height,
                opacity: tf.opacity,
                zIndex: tf.zIndex,
              }}
              transition={springTransition}
            >
              <motion.button
                aria-label={
                  isActive
                    ? `Current cover: ${altTexts?.[index] ?? `Cover ${index + 1}`}`
                    : `View ${altTexts?.[index] ?? `Cover ${index + 1}`}`
                }
                disabled={isActive}
                onClick={() => !isActive && setActiveIndex(index)}
                className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A57A60] my-auto"
                style={{ pointerEvents: isHidden ? "none" : "auto" }}
                whileHover={!isActive && !prefersReducedMotion ? { y: -6 } : {}}
                transition={{ duration: 0.12 }}
              >
                <div
                  className="relative overflow-hidden w-full h-full bg-white z-10"
                  style={{
                    borderRadius: 2,
                    boxShadow: tf.shadow,
                    cursor: isActive ? "default" : "pointer",
                  }}
                >
                  <Image
                    src={src}
                    alt={altTexts?.[index] ?? `Magazine cover ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 300px, 360px"
                    draggable={false}
                  />
                </div>

                {/* Reflection */}
                <div
                  className="absolute top-full left-0 w-full h-full pointer-events-none -z-10"
                  style={{
                    transform: "scaleY(-1)",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)",
                    opacity: 0.2,
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: 2 }}>
                    <Image
                      src={src}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover object-top blur-[2px] saturate-[0.6] brightness-75"
                      sizes="(max-width: 768px) 300px, 360px"
                      draggable={false}
                    />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Controls row                                                        */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex items-center gap-4 mt-6">
        {/* Prev */}
        {/* <button
          onClick={retreat}
          aria-label="Previous cover"
          className="w-8 h-8 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow flex items-center justify-center text-[#A57A60] hover:bg-white hover:scale-110 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A57A60]"
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button> */}

        {/* Dots */}
        {/* <div className="flex items-center gap-2" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to cover ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A57A60] rounded-full"
            >
              <motion.span
                className="block rounded-full bg-[#A57A60]"
                animate={{
                  width: i === activeIndex ? 20 : 7,
                  opacity: i === activeIndex ? 1 : 0.35,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 320, damping: 28 }
                }
                style={{ height: 7 }}
              />
            </button>
          ))}
        </div> */}

        {/* Next */}
        {/* <button
          onClick={advance}
          aria-label="Next cover"
          className="w-8 h-8 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow flex items-center justify-center text-[#A57A60] hover:bg-white hover:scale-110 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A57A60]"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </button> */}
      </div>
    </div>
  );
}

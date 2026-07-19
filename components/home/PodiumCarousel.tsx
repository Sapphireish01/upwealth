"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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

export default function PodiumCarousel({
  images,
  altTexts,
  autoPlayInterval = 3500,
}: PodiumCarouselProps) {
  const total = images.length;
  const [screenType, setScreenType] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setScreenType("mobile");
      } else if (w < 1024) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute dimensions based on screenType
  let W0 = 300, H0 = 380;
  let W1 = 270, H1 = 350;
  let W2 = 70, H2 = 320;
  let GAP = 30;

  if (screenType === "tablet") {
    W0 = 220; H0 = 280;
    W1 = 180; H1 = 240;
    W2 = 50; H2 = 210;
    GAP = 15;
  } else if (screenType === "mobile") {
    W0 = 150; H0 = 190;
    W1 = 110; H1 = 150;
    W2 = 30; H2 = 120;
    GAP = 5;
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
        y: -15,
        width: W1,
        height: H1,
        zIndex: 40,
        opacity: 1,
        shadow: "0 10px 30px rgba(0,0,0,0.20)",
      };
    }

    // ── ±2 cards (thin strips) ────────────────────────────────────────────────
    if (abs === 2) {
      const x = sign > 0
        ? W0 / 2 + W1 / 2 + GAP - (screenType === "mobile" ? 15 : 45)
        : -(W0 / 2 + W1 / 2 + W2) - GAP + (screenType === "mobile" ? 15 : 45);
      return {
        x,
        y: -20,
        width: W2,
        height: H2,
        zIndex: 30,
        opacity: 0.9,
        shadow: "0 4px 14px rgba(0,0,0,0.14)",
      };
    }

    // ── Hidden / staging ──────────────────────────────────────────────────────
    const x = sign > 0
      ? W0 / 2 + W1 / 2 + GAP - 5
      : -(W0 / 2 + W1 / 2 + W2) - GAP + 5;
    return {
      x,
      y: -35,
      width: W2,
      height: H2,
      zIndex: 0,
      opacity: 0,
      shadow: "none",
    };
  }

  // Initialize activeIndex to a large offset matching the initial center (total / 2)
  const [activeIndex, setActiveIndex] = useState(
    () => Math.floor(total / 2) + total * 100
  );
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const advance = useCallback(
    () => setActiveIndex((prev) => prev + 1),
    []
  );

  const retreat = useCallback(
    () => setActiveIndex((prev) => prev - 1),
    []
  );

  const handleCardClick = (targetImgIndex: number) => {
    const currentImgIndex = ((activeIndex % total) + total) % total;
    let diff = targetImgIndex - currentImgIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    setActiveIndex((prev) => prev + diff);
  };

  // Auto-play — paused while hovered / focused
  useEffect(() => {
    if (hovered) return;
    const id = setInterval(advance, autoPlayInterval);
    return () => clearInterval(id);
  }, [advance, autoPlayInterval, hovered]);

  const springTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 220, damping: 26, mass: 1 };

  // Render a window of offsets from -3 to 3 (7 cards total)
  const offsets = [-3, -2, -1, 0, 1, 2, 3];

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
        {offsets.map((off) => {
          const vIndex = activeIndex + off;
          const imgIndex = ((vIndex % total) + total) % total;
          const src = images[imgIndex];
          const tf = getTransform(off);
          const isActive = off === 0;
          const isHidden = Math.abs(off) > 2;

          return (
            <motion.div
              key={vIndex}
              aria-hidden={isHidden}
              initial={false}
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
                    ? `Current cover: ${altTexts?.[imgIndex] ?? `Cover ${imgIndex + 1}`}`
                    : `View ${altTexts?.[imgIndex] ?? `Cover ${imgIndex + 1}`}`
                }
                disabled={isActive}
                onClick={() => !isActive && handleCardClick(imgIndex)}
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
                    alt={altTexts?.[imgIndex] ?? `Magazine cover ${imgIndex + 1}`}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 250px, 300px"
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
                      sizes="(max-width: 768px) 250px, 300px"
                      draggable={false}
                    />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

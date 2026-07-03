"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "../ui/ScrollIndicator";

export default function AboutSection() {
  return (
    <section className="pb-20 w-full">
      <div className="max-w-[1920px] mx-auto w-full relative z-20 px-6 xl:pl-[100px] xl:pr-[127px] flex -mt-16 lg:-mt-90">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#F0F0F3] rounded-t-[32px] shadow-[var(--nm-drop)] p-10 lg:px-18 lg:py-10 flex flex-col items-center"
        >
          {/* Top Content Row */}
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full">
            {/* Left */}
            <div className="w-full lg:w-1/3">
              <p
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                className="text-[26px] leading-[43px] text-start font-normal uppercase bg-[linear-gradient(170.87deg,#E9A032_6.92%,#F5C26E_104.94%)] bg-clip-text text-transparent">
                About Us
              </p>
              <h2
                className="text-black text-[30px] font-bold"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Grow your net worth<br />by growing your<br />network.
              </h2>
            </div>

            <div className="hidden lg:block w-[6px] h-[227px] bg-[#F0F0F3] shadow-[var(--nm-inner)] rounded-[4px] flex-shrink-0" />

            {/* Right */}
            <div style={{ fontFamily: "var(--font-montserrat)" }} className="w-full lg:w-2/3">
              <p className="text-[#202020] mt-4 text-[14px] leading-[32px] font-normal">
                UpWealth Magazine is a premier publication for entrepreneurs, by entrepreneurs.
                Do you ever wonder how successful business owners become debt-free and financially
                free while spending time with their loved ones and doing what they enjoy?
                <br />
                Read from small to large business owners who have mastered the art of creating
                and maintaining business systems, sticking to their visions, and persisting in
                their missions. The power of leveraging other businesses is unmatched.
              </p>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <ScrollIndicator mt="4" />
        </motion.div>
      </div>
    </section>
  );
}

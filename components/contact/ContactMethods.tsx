"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_METHODS } from "@/data";
import type { ContactMethodType } from "@/types";

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="57" height="57" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M31.25 0C48.5094 0 62.5 13.9906 62.5 31.25C62.5 48.5094 48.5094 62.5 31.25 62.5H6.25C4.5924 62.5 3.00268 61.8415 1.83058 60.6694C0.65848 59.4973 0 57.9076 0 56.25V31.25C0 13.9906 13.9906 0 31.25 0ZM31.25 6.25C24.6196 6.25 18.2607 8.88392 13.5723 13.5723C8.88392 18.2607 6.25 24.6196 6.25 31.25V56.25H31.25C37.8804 56.25 44.2393 53.6161 48.9277 48.9277C53.6161 44.2393 56.25 37.8804 56.25 31.25C56.25 24.6196 53.6161 18.2607 48.9277 13.5723C44.2393 8.88392 37.8804 6.25 31.25 6.25ZM31.25 37.5C32.0465 37.5009 32.8126 37.8059 33.3918 38.3527C33.971 38.8994 34.3195 39.6467 34.3662 40.4419C34.4128 41.237 34.1541 42.0199 33.6429 42.6307C33.1317 43.2415 32.4066 43.6341 31.6156 43.7281L31.25 43.75H21.875C21.0785 43.7491 20.3124 43.4441 19.7332 42.8974C19.154 42.3506 18.8055 41.6033 18.7588 40.8081C18.7122 40.013 18.9709 39.2301 19.4821 38.6193C19.9933 38.0085 20.7185 37.616 21.5094 37.5219L21.875 37.5H31.25ZM40.625 25C41.4538 25 42.2487 25.3292 42.8347 25.9153C43.4208 26.5013 43.75 27.2962 43.75 28.125C43.75 28.9538 43.4208 29.7487 42.8347 30.3347C42.2487 30.9208 41.4538 31.25 40.625 31.25H21.875C21.0462 31.25 20.2513 30.9208 19.6653 30.3347C19.0792 29.7487 18.75 28.9538 18.75 28.125C18.75 27.2962 19.0792 26.5013 19.6653 25.9153C20.2513 25.3292 21.0462 25 21.875 25H40.625Z" fill="currentColor" />
  </svg>
);

const CallIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="49" height="49" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M35.1124 4.08046C35.1917 3.78302 35.3286 3.50416 35.5153 3.25983C35.702 3.0155 35.9349 2.81048 36.2006 2.65649C36.4663 2.5025 36.7596 2.40255 37.0638 2.36236C37.368 2.32217 37.6771 2.34253 37.9735 2.42226C42.3032 3.5559 46.2536 5.82727 49.4177 9.00244C52.5818 12.1776 54.8452 16.1418 55.9749 20.4867C56.0543 20.7841 56.0746 21.0943 56.0346 21.3996C55.9945 21.7048 55.8949 21.9992 55.7415 22.2658C55.588 22.5325 55.3837 22.7661 55.1402 22.9535C54.8968 23.1409 54.6189 23.2783 54.3225 23.3578C54.1252 23.4098 53.9221 23.4364 53.7181 23.4369C53.2039 23.4371 52.7039 23.2669 52.2958 22.9528C51.8878 22.6386 51.5945 22.1981 51.4614 21.6996C50.5405 18.1522 48.6934 14.9154 46.1106 12.323C43.5278 9.73058 40.3026 7.87638 36.7677 6.95156C36.4711 6.87231 36.1929 6.73515 35.9491 6.54792C35.7053 6.36069 35.5007 6.12706 35.3469 5.8604C35.1932 5.59374 35.0933 5.29928 35.0531 4.99386C35.0128 4.68844 35.033 4.37806 35.1124 4.08046ZM34.4322 16.3266C38.4581 17.4047 41.0448 20.0033 42.1191 24.0434C42.2522 24.5419 42.5455 24.9824 42.9536 25.2965C43.3616 25.6106 43.8616 25.7808 44.3759 25.7807C44.5798 25.7801 44.7829 25.7536 44.9802 25.7016C45.2766 25.622 45.5545 25.4846 45.798 25.2973C46.0414 25.1099 46.2457 24.8762 46.3992 24.6096C46.5527 24.343 46.6522 24.0486 46.6923 23.7433C46.7323 23.4381 46.7121 23.1279 46.6326 22.8305C45.1378 17.2172 41.2316 13.2973 35.6379 11.7973C35.3416 11.7178 35.0325 11.6977 34.7284 11.7381C34.4243 11.7785 34.1311 11.8787 33.8656 12.0328C33.6 12.1869 33.3673 12.392 33.1808 12.6363C32.9942 12.8807 32.8575 13.1595 32.7783 13.4569C32.6991 13.7543 32.6791 14.0645 32.7194 14.3696C32.7596 14.6748 32.8594 14.969 33.013 15.2355C33.1666 15.5019 33.3709 15.7354 33.6144 15.9227C33.858 16.1099 34.1358 16.2471 34.4322 16.3266ZM55.5778 39.392L41.8243 33.2074L41.7863 33.1898C41.0723 32.8834 40.2934 32.7604 39.5201 32.832C38.7468 32.9036 38.0035 33.1676 37.3575 33.6C37.2814 33.6504 37.2083 33.7052 37.1385 33.7641L30.0325 39.8432C25.5307 37.6488 20.8829 33.0199 18.6963 28.5609L24.7629 21.3217C24.8213 21.2484 24.8768 21.1752 24.9293 21.0961C25.351 20.4495 25.6068 19.7084 25.674 18.9386C25.7413 18.1688 25.6178 17.3943 25.3147 16.684V16.6488L19.1342 2.82363C18.7335 1.89569 18.0444 1.12269 17.1699 0.620028C16.2954 0.117362 15.2824 -0.088012 14.282 0.0345634C10.3261 0.556947 6.69488 2.50654 4.06664 5.51922C1.43841 8.5319 -0.00712621 12.4016 2.64172e-05 16.4057C2.64172e-05 39.6674 18.8598 58.5932 42.0403 58.5932C46.0304 58.6003 49.8866 57.1497 52.8887 54.5123C55.8909 51.8749 57.8337 48.2309 58.3543 44.2611C58.4766 43.2576 58.2724 42.2413 57.772 41.3638C57.2717 40.4863 56.502 39.7946 55.5778 39.392Z" fill="currentColor" />
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="57" height="57" viewBox="0 0 75 57" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M70.0781 7.89375L40.4859 32.4C39.6451 33.0967 38.5873 33.478 37.4953 33.478C36.4033 33.478 35.3456 33.0967 34.5047 32.4L4.92656 7.89375C4.76778 8.37144 4.68705 8.87161 4.6875 9.375V46.875C4.6875 48.1182 5.18136 49.3105 6.06044 50.1896C6.93951 51.0686 8.1318 51.5625 9.375 51.5625H65.625C66.8682 51.5625 68.0605 51.0686 68.9396 50.1896C69.8186 49.3105 70.3125 48.1182 70.3125 46.875V9.375C70.3145 8.87187 70.2353 8.3717 70.0781 7.89375ZM9.375 0H65.625C68.1114 0 70.496 0.98772 72.2541 2.74587C74.0123 4.50403 75 6.8886 75 9.375V46.875C75 49.3614 74.0123 51.746 72.2541 53.5041C70.496 55.2623 68.1114 56.25 65.625 56.25H9.375C6.8886 56.25 4.50403 55.2623 2.74587 53.5041C0.987721 51.746 0 49.3614 0 46.875V9.375C0 6.8886 0.987721 4.50403 2.74587 2.74587C4.50403 0.98772 6.8886 0 9.375 0ZM8.39062 4.6875L34.5281 26.2641C35.3652 26.9555 36.4164 27.3349 37.5022 27.3374C38.5879 27.34 39.6409 26.9656 40.4812 26.2781L66.8812 4.6875H8.39062Z" fill="currentColor" />
  </svg>
);

const ICONS: Record<ContactMethodType, React.ElementType> = {
  chat: ChatIcon,
  call: CallIcon,
  email: EmailIcon,
};

export default function ContactMethods() {
  const [revealedMethods, setRevealedMethods] = useState<Record<string, boolean>>({});

  const toggleMethod = (type: string) => {
    setRevealedMethods((prev) => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <section id="contact-methods" className="pb-10 sm:py-20 bg-[#F0F0F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center">

          {/* Left — Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[506px]"
          >
            <h2
              className="text-[#000000] mb-4"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "36px",
                lineHeight: "42px",
                fontWeight: 700,
              }}
            >
              Get in touch with Upwealth Magazine
            </h2>
            <p
              className="text-[#000000]"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                maxWidth: "415px"
              }}
            >
              If you have any questions regarding subscriptions, or how to feature or advertise
              in our magazine, don't hesitate to get in touch.
            </p>
          </motion.div>

          {/* Right — Method cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CONTACT_METHODS.map(({ type, label }, i) => {
              const Icon = ICONS[type];
              const isRevealed = revealedMethods[type];
              const shouldFlip = type === "chat" && isRevealed;
              const isEmailAddress = type === "email" && isRevealed;
              const textSizeClass = isEmailAddress ? "text-xs" : "text-sm";

              // Determine display text when clicked
              let displayLabel = label;
              if (isRevealed) {
                if (type === "chat") {
                  displayLabel = "+1(931)-266-6101";
                } else if (type === "call") {
                  displayLabel = "+1(931)-266-6424";
                } else if (type === "email") {
                  displayLabel = "info@upwealthmagazine.com";
                }
              }

              return (
                <motion.div
                  key={type}
                  onClick={() => toggleMethod(type)}
                  onMouseLeave={() => {
                    setRevealedMethods((prev) => ({
                      ...prev,
                      [type]: false
                    }));
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="contact-method-card px-6 py-4 sm:px-8 sm:py-14 rounded-[20px] sm:rounded-[32px] flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 cursor-pointer select-none transition-shadow duration-300 w-full"
                  style={{
                    backgroundColor: "#F0F0F3",
                    boxShadow: isRevealed
                      ? "inset -1px -1px 2px #FFFFFF, inset -5px -5px 10px #FFFFFF, inset 1px 1px 2px rgba(0, 0, 0, 0.25), inset 5px 5px 8.5px rgba(0, 0, 0, 0.25)"
                      : "-1px -1px 2px #FFFFFF, -5px -5px 11.5px #FFFFFF, 1px 1px 2px rgba(0, 0, 0, 0.25), 5px 5px 8.5px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-200 pointer-events-none shrink-0 ${isRevealed ? 'text-[#C07708]' : 'text-[#494949]'
                      }`}
                  >
                    <span
                      className={`inline-block transition-transform duration-300 ${shouldFlip ? "transform scale-x-[-1]" : ""}`}
                      style={shouldFlip ? { transform: "scaleX(-1)" } : undefined}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </span>
                  </div>
                  <span className={`${textSizeClass} font-semibold transition-colors duration-200 pointer-events-none ${isRevealed ? 'text-[#C07708]' : 'text-[#494949]'
                    }`}>{displayLabel}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

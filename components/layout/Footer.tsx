import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data";
import { SocialPlatform } from "@/types";

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="black" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.25 11.9167C3.25 7.83142 3.25 5.78825 4.51967 4.51967C5.78825 3.25 7.83142 3.25 11.9167 3.25H14.0833C18.1686 3.25 20.2117 3.25 21.4803 4.51967C22.75 5.78825 22.75 7.83142 22.75 11.9167V14.0833C22.75 18.1686 22.75 20.2117 21.4803 21.4803C20.2117 22.75 18.1686 22.75 14.0833 22.75H11.9167C7.83142 22.75 5.78825 22.75 4.51967 21.4803C3.25 20.2117 3.25 18.1686 3.25 14.0833V11.9167Z" stroke="black" strokeWidth="2" />
    <path d="M17.875 9.75C18.7725 9.75 19.5 9.02246 19.5 8.125C19.5 7.22754 18.7725 6.5 17.875 6.5C16.9775 6.5 16.25 7.22754 16.25 8.125C16.25 9.02246 16.9775 9.75 17.875 9.75Z" fill="black" />
    <path d="M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z" stroke="black" strokeWidth="2" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="black" />
  </svg>
);

const XIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.141 8.892L19.7355 0H17.9355L11.343 7.7205L6.075 0H0L7.965 11.676L0 21H1.8L8.763 12.846L14.3265 21H20.4015L12.141 8.892ZM9.6765 11.778L8.8695 10.6155L2.448 1.365H5.2125L10.3935 8.8305L11.2005 9.993L17.937 19.698H15.1725L9.6765 11.778Z" fill="black" />
  </svg>
);

const SOCIAL_ICONS: Record<SocialPlatform, React.ElementType> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  twitter: XIcon,
};

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F3] shadow-[0px_-7px_7.3px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
            <Image src="/images/upwealth-logo.svg" alt="Logo" width={211} height={42} />
          </Link>

          {/* Footer Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 w-full max-w-[376px]">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#000000] hover:text-[#1B1F3B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ platform, href, label }) => {
              const Icon = SOCIAL_ICONS[platform];
              return (
                <a
                  key={platform}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 p-3 rounded-full! flex items-center justify-center nm-flat hover:[box-shadow:var(--nm-inner)] transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col items-center gap-6 text-center">
          <svg viewBox="0 0 376 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[376px] h-[6px]">
            <g filter="url(#filter0_iiii_1_9487)">
              <rect width="376" height="6" rx="3" fill="#F0F0F3" />
            </g>
            <defs>
              <filter id="filter0_iiii_1_9487" x="-4" y="-4" width="385" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="5" dy="5" />
                <feGaussianBlur stdDeviation="4.25" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_9487" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect1_innerShadow_1_9487" result="effect2_innerShadow_1_9487" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-4" dy="-4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_1_9487" result="effect3_innerShadow_1_9487" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-1" dy="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_innerShadow_1_9487" result="effect4_innerShadow_1_9487" />
              </filter>
            </defs>
          </svg>
          <p className="text-[16px] text-[#000000] font-medium">
            © 2022 – {new Date().getFullYear()} | All rights reserved by Kaltech Designs
          </p>
        </div>
      </div>
    </footer>
  );
}

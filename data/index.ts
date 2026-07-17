import type {
  MagazineIssue,
  NavLink,
  SocialLink,
  ContactMethod,
} from "@/types";

// ─── Magazine Issues ──────────────────────────────────────────────────────────
// Replace coverImage paths with real assets under /public/images/covers/
export const MAGAZINE_ISSUES: MagazineIssue[] = [
  {
    id: "issue-001",
    title: "Generating Revenue With Good Planning",
    coverImage: "/images/covers/issue-001.jpg",
    coverAlt: "Upwealth Magazine — Revenue & Planning issue cover",
    issue: "Vol. 1, Issue 1",
    date: "January 2024",
    featured: true,
  },
  {
    id: "issue-002",
    title: "Is Your Business Worth Anything?",
    coverImage: "/images/covers/issue-002.jpg",
    coverAlt: "Upwealth Magazine — Business Valuation issue cover",
    issue: "Vol. 1, Issue 2",
    date: "February 2024",
  },
  {
    id: "issue-003",
    title: "Entrepreneurial Self Esteem: What Is Motivating You?",
    coverImage: "/images/covers/issue-003.jpg",
    coverAlt: "Upwealth Magazine — Self Esteem issue cover",
    issue: "Vol. 1, Issue 3",
    date: "March 2024",
  },
  {
    id: "issue-004",
    title: "Blogging For Business Owners",
    coverImage: "/images/covers/issue-004.jpg",
    coverAlt: "Upwealth Magazine — Blogging issue cover",
    issue: "Vol. 2, Issue 1",
    date: "April 2024",
  },
  {
    id: "issue-005",
    title: "Kaltech Virtual Assistants",
    coverImage: "/images/covers/issue-005.jpg",
    coverAlt: "Upwealth Magazine — Virtual Assistants issue cover",
    issue: "Vol. 2, Issue 2",
    date: "May 2024",
  },
  {
    id: "issue-006",
    title: "Leadership & Management Are Not The Same",
    coverImage: "/images/covers/issue-006.jpg",
    coverAlt: "Upwealth Magazine — Leadership issue cover",
    issue: "Vol. 2, Issue 3",
    date: "June 2024",
  },
  {
    id: "issue-007",
    title: "After School Activities & Burnout",
    coverImage: "/images/covers/issue-007.jpg",
    coverAlt: "Upwealth Magazine — Burnout issue cover",
    issue: "Vol. 3, Issue 1",
    date: "July 2024",
  },
];

// Helper: featured issue for radial centre
export const FEATURED_ISSUE = MAGAZINE_ISSUES.find((i) => i.featured) ?? MAGAZINE_ISSUES[0];

// Satellite covers for radial orbit (all except featured)
export const ORBIT_ISSUES = MAGAZINE_ISSUES.filter((i) => !i.featured);

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Kaltech", href: "https://kaltech.com" },
  { label: "Insurance Life", href: "#" },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "facebook", href: "https://www.facebook.com/KaltechVirtualAssistants", label: "Facebook" },
  { platform: "instagram", href: "https://www.instagram.com/kaltechvirtualassistants", label: "Instagram" },
  { platform: "linkedin", href: "https://www.linkedin.com/company/kaltechvirtualassistants", label: "LinkedIn" },
  { platform: "twitter", href: "https://twitter.com/kaltech_vAs", label: "X / Twitter" },
];

// ─── Contact Methods ──────────────────────────────────────────────────────────
export const CONTACT_METHODS: ContactMethod[] = [
  { type: "chat", label: "Chat with us", href: "#" },
  { type: "call", label: "Call us", href: "tel:+19312666101" },
  { type: "email", label: "Send an email", href: "mailto:hello@upwealthmagazine.com" },
];

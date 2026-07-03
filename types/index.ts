// ─── Magazine Issue ───────────────────────────────────────────────────────────
export interface MagazineIssue {
  id: string;
  title: string;
  coverImage: string;       // path under /public/images/covers/
  coverAlt: string;
  issue: string;            // e.g. "Vol. 3, Issue 2"
  date: string;             // e.g. "May 2024"
  description?: string;
  featured?: boolean;       // true = centre of radial display
  href?: string;            // link to issue detail page (future)
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Social Link ──────────────────────────────────────────────────────────────
export type SocialPlatform = "facebook" | "instagram" | "linkedin" | "twitter";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

// ─── Contact Method Card ──────────────────────────────────────────────────────
export type ContactMethodType = "chat" | "call" | "email";

export interface ContactMethod {
  type: ContactMethodType;
  label: string;
  description?: string;
  href?: string;
}

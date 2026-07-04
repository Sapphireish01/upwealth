// ─── Magazine Issue ───────────────────────────────────────────────────────────
export interface MagazineIssue {
  id: string;
  title: string;
  coverImage: string;
  coverAlt: string;
  issue: string;
  date: string;
  description?: string;
  featured?: boolean;
  href?: string;
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

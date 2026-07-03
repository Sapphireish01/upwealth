import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be under 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be under 50 characters"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number too long")
    .regex(/^[+\d\s\-()]+$/, "Enter a valid phone number"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactSchema = z.infer<typeof contactSchema>;

import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, message } = result.data;

    // ─── TODO: replace with your email provider ────────────────────────────
    // Option A — Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from: "...", to: "...", subject: `New message from ${firstName}`, ... });
    //
    // Option B — SendGrid, Nodemailer, etc.
    // ──────────────────────────────────────────────────────────────────────

    console.log("Contact form submission:", { firstName, lastName, email, phone, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

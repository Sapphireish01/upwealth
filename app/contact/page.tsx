import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with UpWealth Magazine for subscriptions, advertising, or general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Animated Form Hero section */}
        <ContactHero />

        {/* Contact method cards + intro */}
        <ContactMethods />
      </main>
      <Footer />
    </>
  );
}

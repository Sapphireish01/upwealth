import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactMethods from "@/components/contact/ContactMethods";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with UpWealth Magazine for subscriptions, advertising, or general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main
        className="pt-16 bg-auto bg-no-repeat bg-top min-h-screen"
        style={{ backgroundImage: "url('/images/bg-contact.png')" }}
      >
        {/* Form hero */}
        <section className="bg-grid py-24 relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F0F0F3] to-transparent pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div 
              className="rounded-[16px] p-10"
              style={{
                background: "rgba(240, 240, 243, 0.7)",
                boxShadow: "-1px -1px 2px #FFFFFF, -5px -5px 11.5px #FFFFFF, 1px 1px 2px rgba(0, 0, 0, 0.25), 5px 5px 8.5px rgba(0, 0, 0, 0.25)"
              }}
            >
              <h1
                className="text-center mb-2 text-[#1B1F3B]"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 800,
                }}
              >
                Contact Our Friendly Team
              </h1>
              <p className="text-center text-sm text-[#8E8E93] mb-8">
                Let us know how we can help
              </p>
              <ContactForm />
            </div>
          </div>
          <ScrollIndicator className="absolute bottom-10 right-6 md:right-32 z-20 hidden lg:block" />
        </section>

        {/* Contact method cards + intro */}
        <ContactMethods />
      </main>
      <Footer />
    </>
  );
}

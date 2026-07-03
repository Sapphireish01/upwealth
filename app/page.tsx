import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import RadialShowcase from "@/components/home/RadialShowcase";
import AboutSection from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RadialShowcase />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

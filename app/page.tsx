import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ColorGallery from "@/components/ColorGallery";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <ColorGallery />
      <SpecsSection />
      <CTASection />
    </main>
  );
}

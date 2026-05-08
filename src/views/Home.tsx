import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ProgramsPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

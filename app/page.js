import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Wrapper from "../components/Wrapper";
import HeroSection from "@/components/Hero-Section";
import TestimonialsSection from "@/components/Testimonial-Section";
import Instructors from "@/components/Instructors";
import PlacementStats from "@/components/PlacementStats";
import OurPrograms from "@/components/OurPrograms";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center">
        <TextHoverEffect text="CODEFLEX" />
        <HeroSection />
        <Instructors />
        <PlacementStats />
        <OurPrograms />
        <TestimonialsSection />
      </div>
    </Wrapper>
  );
}

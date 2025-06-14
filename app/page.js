import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Wrapper from "../components/Wrapper";
import HeroSection from "@/components/Main/Hero-Section";
import TestimonialsSection from "@/components/Main/Testimonial-Section";
import Instructors from "@/components/Main/Instructors";
import PlacementStats from "@/components/Main/PlacementStats";
import OurPrograms from "@/components/Main/OurPrograms";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center">
        {/* <TextHoverEffect text="CODEFLEX" /> */}
        <Image
          src="/CodeflexLogo.png"
          alt="codeflex"
          width={120}
          height={120}
        />
        <HeroSection />
        <Instructors />
        <PlacementStats />
        <OurPrograms />
        <TestimonialsSection />
      </div>
    </Wrapper>
  );
}

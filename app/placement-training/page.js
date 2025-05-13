import Instructors from "@/components/Main/Instructors";
import TestimonialsSection from "@/components/Main/Testimonial-Section";
import Faq from "@/components/Training/Faq";
import Features from "@/components/Training/Features";
import PartnerInstitutions from "@/components/Training/PartnerInstitutions";
import TrainingHero from "@/components/Training/TrainingHero";
import { Footer } from "@/components/ui/footer-section";
import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <TrainingHero />
      <Features />
      <Instructors />
      <TestimonialsSection />
      <PartnerInstitutions />
      <Faq />
    </Wrapper>
  );
}

export default page;

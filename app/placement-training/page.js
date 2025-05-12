import Instructors from "@/components/Main/Instructors";
import Faq from "@/components/Training/Faq";
import Features from "@/components/Training/Features";
import PartnerInstitutions from "@/components/Training/PartnerInstitutions";
import TrainingHero from "@/components/Training/TrainingHero";
import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <TrainingHero />
      <Features />
      <Instructors />
      <PartnerInstitutions />
      <Faq />
    </Wrapper>
  );
}

export default page;

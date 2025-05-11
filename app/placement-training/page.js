import Instructors from "@/components/Main/Instructors";
import TrainingHero from "@/components/Training/TrainingHero";
import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <TrainingHero />
      <Instructors />
    </Wrapper>
  );
}

export default page;

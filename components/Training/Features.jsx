"use client";
import React from "react";
import { motion } from "motion/react";
import { FeaturesSectionWithHoverEffects } from "../ui/feature-section-with-hover-effects";

function Features() {
  return (
    <section className="bg-background mt-20 mb-5 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[1100px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Features</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5  max-w-[560px]">
            Our Features
          </h2>
          <p className="text-center mt-5 opacity-75">
            Our exclusive Placement Training Program is designed to provide the
            students of your college with the competitive edge they need in
            today's job market.
          </p>

          <FeaturesSectionWithHoverEffects />
        </motion.div>
      </div>
    </section>
  );
}

export default Features;

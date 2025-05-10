"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

function OurPrograms() {
  return (
    <div className="py-20">
      <div className="flex justify-center px-4 sm:px-6">
        <div className="border py-1 px-4 rounded-lg text-sm sm:text-base bg-background/50 backdrop-blur-sm">
          Our Programs
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter my-6 sm:mt-6 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        Our Programs that we Offer
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[90rem] mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 h-full bg-pink-800 min-h-[300px] relative group"
            className=""
          >
            <div className="max-w-md">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Placement Training Programme
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                A B2B program that focuses on technical campus training to
                enable students to become interview ready and employable.
              </p>
              <button className="mt-6 px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                Click to know more
              </button>
            </div>
          </WobbleCard>

          <WobbleCard
            containerClassName="col-span-1 h-full bg-blue-900 min-h-[300px] relative group"
            className=""
          >
            <div className="max-w-md">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Personal DSA Programme
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                A personal DSA program that focuses on individual student
                training to enable student to become interview ready and
                employable.
              </p>
              <button className="mt-6 px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                Click to know more
              </button>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;

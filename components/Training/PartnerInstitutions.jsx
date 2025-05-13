"use client";
import React from "react";
import { motion } from "motion/react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function PartnerInstitutions() {
  return (
    <section className="bg-background mt-20 mb-5 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[1500px] mx-auto"
        >
          <div className="flex justify-center w-full">
            <div className="border py-1 px-4 rounded-lg text-sm sm:text-base">
              Partner Institutions
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center px-4">
            Our Partner Institutions
          </h2>
          <p className="text-center mt-5 opacity-75 px-4 text-sm sm:text-base">
            Our exclusive Placement Training Program is designed to provide the
            students of your college with the competitive edge they need in
            today's job market.
          </p>
          <div className="my-10 w-full">
            <InfiniteMovingCards items={partnersList} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnerInstitutions;

const partnersList = [
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/201",
  },
  {
    image: "https://picsum.photos/202",
  },
  {
    image: "https://picsum.photos/203",
  },
  {
    image: "https://picsum.photos/204",
  },
];

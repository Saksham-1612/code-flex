"use client";
import { AnimatedInstructors } from "../ui/animated-instructors";
import { motion } from "motion/react";

function Instructors() {
  const instructors = [
    {
      quote: "Expert in building scalable systems and cloud infrastructure",
      name: "Saksham Arora",
      designation: "Software Engineer 2 @ Intuit | Ex - Microsoft",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote: "Specialized in data engineering and analytics solutions",
      name: "Yugandhari Bodapati",
      designation: "Data Engineer II @ Amazon",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Focused on developing enterprise-level applications",
      name: "Harsh Vardhan",
      designation: "Software Engineer @ Microsoft",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Expert in blockchain technology and distributed systems",
      name: "Sachin Raghuwanshi",
      designation: "Software Engineer @ Coinbase",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2592&auto=format&fit=crop",
    },
    {
      quote: "Specialized in e-commerce and scalable platforms",
      name: "Komal",
      designation: "Software Engineer 2 @ Flipkart",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Expert in cloud computing and system design",
      name: "Megha Gupta",
      designation: "Software Engineer @ Microsoft",
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3542&auto=format&fit=crop",
    },
    {
      quote: "Focused on developing innovative Microsoft solutions",
      name: "Neha Pandey",
      designation: "Software Engineer @ Microsoft",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3541&auto=format&fit=crop",
    },
    {
      quote: "Specialized in retail technology solutions",
      name: "Bhavesh Vaswani",
      designation: "Software Engineer 2 @ Walmart",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Expert in financial technology and cloud systems",
      name: "Arun Bhagat",
      designation: "Software Engineer @ Microsoft | Ex - Goldman Sachs",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Specialized in hardware and software integration",
      name: "Anmol Punetha",
      designation: "Senior Engineer @ Synopsys",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-background mt-20 mb-5 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Instructors</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Our Instructors
          </h2>
        </motion.div>

        <AnimatedInstructors testimonials={instructors} autoplay={true} />
      </div>
    </section>
  );
}

export default Instructors;

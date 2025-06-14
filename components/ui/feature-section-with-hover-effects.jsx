import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Expert Mentorship",
      description:
        "Students receive guidance from industry professionals who share real-world insights and align learning with market expectations.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Regular Evaluations",
      description:
        "Frequent assessments track performance, identify weak areas, and prepare students for placements.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Referral & Interview Prep",
      description:
        "Referral opportunities at top tech companies with company-wise tailored preparation strategies.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Hybrid & Online Learning",
      description:
        "Flexible training modes with live mentorship and access to a rich library of online resources.",
      icon: <IconCloud />,
    },
    {
      title: "Hands-On Training",
      description:
        "Industry-relevant projects ensure real-world exposure beyond traditional classroom learning.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Personalized Guidance",
      description:
        "One-on-one mentorship sessions focused on student strengths, weaknesses, and aspirations.",
      icon: <IconHelp />,
    },
    {
      title: "Company-Level Exposure",
      description:
        "Learn with real hiring insights from engineers at Microsoft, Amazon, Walmart, Flipkart, and more.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Campus Collaborations",
      description:
        "Trusted training partner with leading universities across India to bridge academia and industry.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l ",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 ">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300  group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600  max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

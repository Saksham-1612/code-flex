"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    title: "Best decision",
    content:
      "Our goal was to streamline SMB trade, making it easier and faster than ever and we did it together.",
    author: "John Johnsen",
  },
  {
    id: 2,
    title: "Great Experience",
    content:
      "The platform has transformed how we handle our business operations. Highly recommended!",
    author: "Sarah Smith",
  },
  {
    id: 3,
    title: "Excellent Support",
    content:
      "The team provided exceptional support throughout our journey. Couldn't be happier with the results.",
    author: "Michael Brown",
  },
  {
    id: 4,
    title: "Game Changer",
    content:
      "This solution has revolutionized our workflow. The efficiency gains are remarkable.",
    author: "Emily Davis",
  },
  {
    id: 5,
    title: "Outstanding Results",
    content:
      "We've seen tremendous improvement in our processes since implementing this solution.",
    author: "David Wilson",
  },
];

function PlacementStats() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-10 sm:py-16 lg:py-24">
      <div className="flex justify-center px-4 sm:px-6">
        <div className="border py-1 px-4 rounded-lg text-sm sm:text-base bg-background/50 backdrop-blur-sm">
          Placement Highlights
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-4 sm:mt-6 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        Our Students at Big Tech
      </h2>
      <p className="text-center mt-3 sm:mt-4 opacity-75 text-sm sm:text-base px-4 sm:px-6 max-w-2xl mx-auto">
        Here is the list of our students at Big Tech
      </p>

      <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
        <div className="flex flex-col gap-6 sm:gap-8">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialData.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-muted rounded-lg h-full p-4 sm:p-6 aspect-[4/3] sm:aspect-video flex justify-between flex-col hover:bg-muted/80 transition-colors">
                    <User className="w-6 h-6 sm:w-8 sm:h-8 stroke-1" />
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2 line-clamp-3">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-xs sm:text-sm items-center">
                        <span className="text-muted-foreground">By</span>
                        <span className="font-medium">
                          {testimonial.author}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PlacementStats;

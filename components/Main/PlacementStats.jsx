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
    title: "Placed at Gap",
    content: "2025 Graduate | Successfully placed at Gap Inc.",
    author: "Isha Agarwal",
    link: "https://www.linkedin.com/in/isha1303/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQFf79tZ7sXiYA/profile-displayphoto-shrink_800_800/B56ZSJ262pHsAg-/0/1737479664193?e=1755129600&v=beta&t=SwkmH9PRElNRkyUVIQBpLL2xUvYRn6fsLewQjnAT-tg", // Add direct image URL
  },
  {
    id: 2,
    title: "Placed at Google",
    content: "2025 Graduate | Secured a role at Google.",
    author: "Shweta Ranjan",
    link: "https://www.linkedin.com/in/shwetaranjan2203/",
    profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQHOgzjsiOHdkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698313164646?e=1755129600&v=beta&t=a8R03xqi2dzvV9LMzzDKZrto_wOb1l_eSHxmWE6VGeU",
  },
  {
    id: 3,
    title: "Placed at Walmart",
    content: "2026 Graduate | Joined Walmart as an engineer.",
    author: "Tanisha Mishra",
    link: "https://www.linkedin.com/in/tanishamishra123/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQEjcBkr68EfsA/profile-displayphoto-shrink_400_400/B56ZXHrAQaHQAk-/0/1742811695729?e=1755129600&v=beta&t=Lh91L-DfNtbsVtNqDT4Qewcl1M-Uqv0_2m3KVrqGB-o",
  },
  {
    id: 4,
    title: "Placed at Samsung",
    content: "2025 Graduate | Successfully placed at Samsung.",
    author: "Ritesh Kumar",
    link: "https://www.linkedin.com/in/ritesh-kumar-7aa707202/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQFLkfiD_DvfvQ/profile-displayphoto-shrink_400_400/B56ZXgoDwHHoAg-/0/1743230353584?e=1755129600&v=beta&t=uipVc5VjQuazkhHidQNY4MTnC6Bh6SpI1DY9tkUsnSw",
  },
  {
    id: 5,
    title: "Placed at Kapture CX",
    content: "2025 Graduate | Started career at Kapture CX.",
    author: "Saksham Srivastava",
    link: "https://www.linkedin.com/in/saksham1612/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQG5bg7jNPkYhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711740227041?e=1755129600&v=beta&t=j7wC8l18TxqzfjSB_7pubY-Fh1Ca7kp9xrNT_MfmdMg",
  },
  {
    id: 6,
    title: "Placed at Vivnovation",
    content: "2025 Graduate | Working at Vivnovation.",
    author: "Nishtha Khosla",
    link: "",
    profilePic: "",
  },
  {
    id: 7,
    title: "Placed at Optmyzr",
    content: "Now working at Optmyzr.",
    author: "Komaldeep Singh",
    link: "https://www.linkedin.com/in/komaldeep-singh-527391187/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQHRNfWSlbqKag/profile-displayphoto-shrink_800_800/B56ZUpXaMRGsAk-/0/1740155757830?e=1755129600&v=beta&t=oD7tHMi-526Wt5EWyXzBWn3UftrXzjt-HZevOSoMHKw",
  },
  {
    id: 8,
    title: "Placed at Commvault",
    content: "2023 Graduate | Successfully placed at Commvault.",
    author: "Aditya Ray",
    link: "https://www.linkedin.com/in/ray-aditya/",
    profilePic: "https://media.licdn.com/dms/image/v2/D4D35AQHPofDYiCJXWw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1661008828751?e=1750536000&v=beta&t=B_0BZTSBiimz9FIS79c2RaIrn2sSn05EriKlgYx36D4",
  },
  {
    id: 9,
    title: "Placed at Flipkart",
    content: "2025 Graduate | Joined Flipkart as Software Engineer.",
    author: "Kashish Bedi",
    link: "https://www.linkedin.com/in/kashish-bedi-763112228/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQFCrcIQxKvv3w/profile-displayphoto-shrink_800_800/B56ZW3wURoGsAc-/0/1742544653241?e=1755129600&v=beta&t=HnJcwK7GmOJvaM4p6ARZMYIi3DB-Az4koE0qQaeggec",
  },
  {
    id: 10,
    title: "Placed at BrowserStack",
    content: "2024 Graduate | Working at BrowserStack.",
    author: "Akarsh",
    link: "https://www.linkedin.com/in/akarsh-arora-2077011a7/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQHA3T0Ku__RWQ/profile-displayphoto-shrink_400_400/B56ZX3O8E4GoAk-/0/1743609645411?e=1755129600&v=beta&t=wVS9b2S4mI8SvZ3NF4g4y8hIgXEJZ80dveP89GtgaI8",
  },
  {
    id: 11,
    title: "Placed at Azentio",
    content: "2024 Graduate | Joined Azentio.",
    author: "Lakee Mangal",
    link: "https://www.linkedin.com/in/lakee-mangal/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQF5FbLWp8hcwQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723972644380?e=1755129600&v=beta&t=8lmXkqKIz76951Nxie2aH2eRSgpbLc74grzXkoWgy0I",
  },
  {
    id: 12,
    title: "Placed at Razorpay",
    content: "2024 Graduate | Now at Razorpay, Ex-MoveInSync.",
    author: "Mudit Mishra",
    link: "https://www.linkedin.com/in/mudit-mishra/",
    profilePic: "https://media.licdn.com/dms/image/v2/C4D03AQFRAjghAMpnpw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649441525472?e=1755129600&v=beta&t=UHnO9Vf5p4vYMhy6hahhba7WJ8st34jejqvhbsqYL1Y",
  },
  {
    id: 13,
    title: "Placed at Transunion",
    content: "2024 Graduate | Working at Transunion.",
    author: "Saksham Kumar",
    link: "https://www.linkedin.com/in/ksaksham/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQHjVARorAAVhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707732397550?e=1755129600&v=beta&t=splAqtMncBChdDcYMRAx4ifumtT6r0mryKurXQwKiNY",
  },
  {
    id: 14,
    title: "Placed at OpenText",
    content: "2025 Graduate | Joined OpenText.",
    author: "Isha Kunwar",
    link: "https://www.linkedin.com/in/ishakunwar/",
    profilePic: "https://media.licdn.com/dms/image/v2/D5603AQE4GATCEOa79g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718236552888?e=1755129600&v=beta&t=un_bOvq0YFkupP_6fFRfxrZ1uDDv4ND-1ceBJHS5g0M",
  },
];


function getLinkedInProfilePic(link) {
  const username = link?.split("/in/")[1]?.replace("/", "");
  return username
    ? `https://unavatar.io/linkedin/${username}`
    : null;
}

export default function PlacementStats() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timeout = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        api.scrollTo(0);
        setCurrent(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearTimeout(timeout);
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
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialData.map((testimonial) => {
              const profilePic = getLinkedInProfilePic(testimonial.link);

              return (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <a
                    href={testimonial.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-muted rounded-lg h-full p-4 sm:p-6 aspect-[4/3] sm:aspect-video hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex flex-col justify-between h-full gap-3 sm:gap-4">
                    {testimonial.profilePic ? (
                      <img
                        src={testimonial.profilePic}
                        alt={testimonial.author}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-300"
                      />
                    ) : (
                      <User className="w-10 h-10 sm:w-12 sm:h-12 stroke-1" />
                    )}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base mt-1 line-clamp-3">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.author}
                      </p>
                    </div>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

"use client";
import { AnimatedInstructors } from "../ui/animated-instructors";
import { motion } from "motion/react";

function Instructors() {
  const instructors = [
    {
      quote: "Competitive programming and system design instructor with strong coding expertise.",
      name: "Saksham Arora",
      designation: "Software Engineer 2 @ Intuit | Ex - Microsoft",
      src: "https://drive.google.com/uc?id=1w5Iqg7KP-hytvYHPEOZ4IBYnFDnv69Hf",
      linkedin: "https://www.linkedin.com/in/sakshamarora9575/",
    },
    {
      quote: "Data Engineer and mentor with strong Python, SQL, Java, and Cloud/Data expertise.",
      name: "Yugandhari Bodapati",
      designation: "Data Engineer II @ Amazon",
      src: "https://drive.google.com/uc?id=1mO2OlVlLf3Yjti5M4wIHZjHDkdJwgHPX",
      linkedin: "https://www.linkedin.com/in/yugandhari-bodapati-28a249193/",
    },
    {
      quote: "Microsoft engineer with a strong background in building enterprise-grade solutions.",
      name: "Harsh Vardhan",
      designation: "Software Engineer @ Microsoft",
      src: "https://drive.google.com/uc?id=133FQ9PdG39i4PSj1xjl9G6aQhWEW_4YX",
      linkedin: "https://www.linkedin.com/in/harsh-vardhan-6bb232210",
    },
    {
      quote: "DSA instructor | Codeforces: 1902 | CodeChef: 2115 | LeetCode: 2238",
      name: "Sachin Raghuwanshi",
      designation: "Software Engineer @ Coinbase",
      src: "https://drive.google.com/uc?id=1-XcVdI5hhKDtS8-ro4ilw-419oLTLOcX",
      linkedin: "https://www.linkedin.com/in/sachin-raghuwanshi-260872201/",
    },
    {
      quote: "E-commerce expert building scalable systems at Flipkart.",
      name: "Komal",
      designation: "Software Engineer 2 @ Flipkart",
      src: "https://drive.google.com/uc?id=1s3mbrbp4l86t0qkV3famYDc2ql9bHsYS",
      linkedin: "https://www.linkedin.com/in/komal-65966b176",
    },
    {
      quote: "Expert in cloud computing, Microsoft technologies, and system design.",
      name: "Megha Gupta",
      designation: "Software Engineer @ Microsoft",
      src: "https://drive.google.com/uc?id=1nkBOWL8e3TCi3haQ3-wEaPKTFpdPBb9-",
      linkedin: "https://www.linkedin.com/in/megha-gupta12",
    },
    {
      quote: "Focused on developing innovative solutions at Microsoft.",
      name: "Neha Pandey",
      designation: "Software Engineer @ Microsoft",
      src: "https://drive.google.com/uc?id=14WR1vv_qpjGYqXujGA5OdkjaWzZdxL5e",
      linkedin: "https://www.linkedin.com/in/nehapandey2811",
    },
    {
      quote: "Building retail and scalable platforms at Walmart.",
      name: "Bhavesh Vaswani",
      designation: "Software Engineer 2 @ Walmart",
      src: "https://drive.google.com/uc?id=1E3xr6dNptcMyhczBTNv8Am_5gIujyR-C",
      linkedin: "https://www.linkedin.com/in/bhavesh-vaswani-a1288b179/",
    },
    {
      quote: "Fintech and cloud engineering expert with dual experience at Microsoft and Goldman Sachs.",
      name: "Arun Bhagat",
      designation: "Software Engineer @ Microsoft | Ex - Goldman Sachs",
      src: "https://drive.google.com/uc?id=14i1JmQ10Afxyif5aHfMqNiqTLTr-yiPB",
      linkedin: "https://www.linkedin.com/in/arun-bhagat-b8a15213a/",
    },
    {
      quote: "5⭐ CodeChef | 2081+ LeetCode | Ex-Scaler, Coding Ninjas instructor.",
      name: "Anmol Punetha",
      designation: "Senior Engineer @ Synopsys",
      src: "https://drive.google.com/uc?id=1dBHhtH6mTODQD3PVLtLGpqFRUN47MxYy",
      linkedin: "https://www.linkedin.com/in/anmol-punetha-51777b191",
    },
    {
      quote: "Seasoned PM with 7+ years at Microsoft, mentoring 38+ professionals.",
      name: "Ankita Jain",
      designation: "Product Manager 2 @ Microsoft",
      src: "https://drive.google.com/uc?id=1AVHKK9HSuTRdrmcw0s2IJ4Us2jNEw62Y",
      linkedin: "http://linkedin.com/in/ankitajain1995",
    },
    {
      quote: "AI and Data Scientist building large-scale models at Microsoft.",
      name: "Soham Ghosh",
      designation: "Senior Data Scientist @ Microsoft",
      src: "https://drive.google.com/uc?id=1EEMnElSrzz6Bt_Fkrx2-MAP_jNNUZI2f",
      linkedin: "https://www.linkedin.com/in/sohamghosh95",
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

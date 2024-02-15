"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          opacity: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="/lenze_logo.jpg"
        alt="Company Logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="mt-1 text-2xl font-bold">Lenze Mechatronics Pvt. Ltd.</p>
        <div className="my-2 flex space-x-2">
          <Image
            width={10}
            height={10}
            className="h-10 w-10 rounded-full"
            src="typescript-icon.svg"
            alt="Technology icon"
          />
          <Image
            className="h-10 w-10 rounded-full"
            width={10}
            height={10}
            src="typescript-icon.svg"
            alt="Technology icon"
          />
          <Image
            width={10}
            height={10}
            className="h-10 w-10 rounded-full"
            src="typescript-icon.svg"
            alt="Technology icon"
          />
          <Image
            width={10}
            height={10}
            className="h-10 w-10 rounded-full"
            src="typescript-icon.svg"
            alt="Technology icon"
          />
        </div>
        <p className="py-5 uppercase text-gray-300">Started work... Ended...</p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

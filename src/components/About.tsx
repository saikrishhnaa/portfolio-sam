"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-white">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/saikrishna.png"
        className="-mb-20 ml-10 h-56 w-56 flex-shrink-0 rounded-full bg-[#112436] object-cover object-top md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Hey there, I&apos;m{" "}
          <span className="underline decoration-[#F7AB0A]/50">Saikrishna</span>{" "}
          -<div>Software Engineer, based in Pune, India</div>
        </h4>
        <p className="text-base text-white/50">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;

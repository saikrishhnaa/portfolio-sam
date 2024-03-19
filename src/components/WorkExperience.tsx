"use client";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typing";
import experience from "../../sanity/schemaTypes/experience";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px]">
        Experience
      </h3>
      <div className="relative top-24 h-[700px] max-w-[1400px] overflow-y-auto px-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map((experience) => (
          <div key={experience._id} className="relative text-left">
            <div className="relative flex">
              <div className="hidden w-20 md:block">
                <div className="text-s italic text-white/50">
                  {months[new Date(experience.dateStarted).getMonth()] +
                    " " +
                    new Date(experience.dateStarted).getFullYear()}{" "}
                  -{" "}
                  {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : months[new Date(experience.dateEnded).getMonth()] +
                      " " +
                      new Date(experience.dateEnded).getFullYear()}
                </div>
              </div>

              <div className="absolute left-1 top-2 z-10 h-full border-r-2 border-[#90a6bb] md:left-[90px]">
                <i className="fas fa-circle absolute -top-1 -ml-2">
                  <div className="h-4 w-4 rounded-full bg-[#90a6bb]"></div>
                </i>
              </div>

              <div className="relative ml-10">
                <div className="relative mx-10 font-bold md:mb-2">
                  {experience.company}
                </div>
                <div className="mx-10 italic text-[#BFA181] md:mb-4">
                  {experience.jobTitle}
                </div>
                <div className="mx-10 mb-4 mt-2 text-white/50 md:hidden">
                  {months[new Date(experience.dateStarted).getMonth()] +
                    " " +
                    new Date(experience.dateStarted).getFullYear()}{" "}
                  -{" "}
                  {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : months[new Date(experience.dateEnded).getMonth()] +
                      " " +
                      new Date(experience.dateEnded).getFullYear()}
                </div>
                <div className="relative mx-10 mb-10">
                  <ul className="relative list-disc space-y-4 overflow-y-auto pr-5 text-lg text-white/50 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                    {" "}
                    {experience.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

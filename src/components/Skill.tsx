import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill?.image).url()}
        className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
        transition={{ duration: 1.5 }}
      />
      <div className="absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-[#0a1a2b] group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full resize items-center justify-center">
          <p className="text-center text-lg font-bold text-white opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

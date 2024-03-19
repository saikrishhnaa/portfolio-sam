"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../../typing";
import skill from "../../sanity/schemaTypes/skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px]">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-white/50">
        Hover over a skill for it&lsquo;s name
      </h3>
      <div className="absolute top-56 grid grid-cols-4 gap-5">
        {skills
          ?.slice(0, skills.length / 2)
          .map((skill) => <Skill key={skill._id} skill={skill} />)}
        {skills
          ?.slice(skills.length / 2, skills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  );
}

export default Skills;

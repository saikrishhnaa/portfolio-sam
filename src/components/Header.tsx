"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PageInfo, Social } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

function Header({ socials, pageInfo }: Props) {
  const onGetInTouchBtnClicked = () => {
    window.location.href = `mailto:saikrishnaamakam@gmail.com`;
  };
  const getCSVFileURL = () => {
    const csvFileURL = pageInfo?.cvFile.asset._ref;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
    const [_file, id, extension] = csvFileURL.split("-");
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
  };
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/*Social icons*/}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex cursor-pointer flex-row items-center text-gray-300"
      >
        <div onClick={onGetInTouchBtnClicked}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
            Get In Touch
          </p>
        </div>
        <a
          href={getCSVFileURL()}
          target="_blank"
          className="text-md ml-5 mr-5 rounded-md border-2 border-[#F7AB0A]/50 px-4 py-1 text-white/60"
          download
        >
          Download CV
        </a>
      </motion.div>
    </header>
  );
}

export default Header;

"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typing";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const onGetInTouchBtnClicked = () => {
    window.location.href = `mailto:saikrishnaamakam@gmail.com`;
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
        className="mr-5 flex cursor-pointer flex-row items-center text-gray-300"
        onClick={onGetInTouchBtnClicked}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;

"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `I'm ${pageInfo?.name}`,
      "Blending-Code-Pixels-Imaginations.tsx",
      "<CraftingDigitalDreamsWithCode />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="relative mx-auto rounded-full object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        priority
        width={150}
        height={150}
        alt={pageInfo?.name}
      />
      <div className="z-20">
        <h1 className="pb-2 text-sm uppercase tracking-[15px] text-white">
          {pageInfo?.role}
        </h1>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";

export default Hero;

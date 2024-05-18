"use client";
import React from "react";
import { cn } from "../../../utils/cn";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hmm, I like looking into "Tech / UI / UX", such as JS where there is unlimited stuff to learn, and work on both the ends, trying to get an overlook of everything ;]`;

export function SpotlightPreview() {
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-[3.5rem] md:text-[4.5rem] leading-none pb-10 sm:leading-relaxed font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Jayanth Gajula
        </h1>
        <h1 className="text-[2.5rem] md:text-[3.5rem] leading-none font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          A fullstack developer.
        </h1>
        <div className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
// import myPic from "content/myPic.jpg"
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="hidden sm:flex flex-col mr-5 lg:flex-row items-center justify-center bg-black dark:bg-black gap-4 shadow-[inset_0px_0px_9px_1px_#fff5f5]">
        <Card title="Just a dev ig..." icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-cyan-700"
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full h-full relative"
    >

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <div className="h-full w-full">
      <Image src={"/content/myPic.jpg"} width={200} height={250} alt="Picture of a dev..."/>
    </div>
  );
};

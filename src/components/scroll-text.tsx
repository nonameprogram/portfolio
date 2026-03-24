"use client";

import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxProps {
  items: string[];
  scrollSpeed?: number;
  initialX?: number;
}

function ParallaxText({
  items = [],
  scrollSpeed = -0.05,
  initialX = 0,
}: ParallaxProps) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, (y) => {
    return `${initialX + y * scrollSpeed}%`;
  });

  const content = items.map((item, index) => (
    <span className="block" key={index}>
      {item}
    </span>
  ));

  return (
    <div className="m-0 flex flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex flex-nowrap gap-16 whitespace-nowrap font-light text-6xl text-white leading-none tracking-tight md:gap-32 md:text-[10rem]"
        style={{ x }}
      >
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
      </motion.div>
    </div>
  );
}

export const ScrollText = ({
  items = ["Frontend", "Backend", "Mobile", "Architecture", "AI"],
  scrollSpeed = -0.01,
  initialX = -1.5,
}: {
  items?: string[];
  scrollSpeed?: number;
  initialX?: number;
}) => {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <ParallaxText
        initialX={initialX}
        items={items}
        scrollSpeed={scrollSpeed}
      />
    </div>
  );
};

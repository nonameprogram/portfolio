"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  items: string[];
  scrollSpeed?: number;
  initialX?: number;
}

function ParallaxText({ items = [], scrollSpeed = -0.05, initialX = 0 }: ParallaxProps) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, (y) => {
    return `${initialX + y * scrollSpeed}%`;
  });

  const content = items.map((item, index) => (
    <span key={index} className="block">{item}</span>
  ));

  return (
    <div className="overflow-hidden m-0 flex flex-nowrap whitespace-nowrap">
      <motion.div
        className="flex gap-16 md:gap-32 whitespace-nowrap flex-nowrap text-white font-light tracking-tight leading-none text-6xl md:text-[10rem]"
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
  items = ["Frontend", "Backend", "Mobile", "DevOps"], 
  scrollSpeed = -0.01, 
  initialX = -1.5 
}: { 
  items?: string[];
  scrollSpeed?: number;
  initialX?: number;
}) => {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <ParallaxText items={items} scrollSpeed={scrollSpeed} initialX={initialX} />
    </div>
  );
};

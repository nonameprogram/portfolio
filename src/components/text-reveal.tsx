"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/utils/cn";

const Word = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: any;
  start: number;
  end: number;
}) => {
  const color = useTransform(progress, [start, end], ["#52525b", "#ffffff"]); // text-neutral-600 to white
  return (
    <motion.span className="mr-2 md:mr-3 mt-2 md:mt-3" style={{ color }}>
      {word}
    </motion.span>
  );
};

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"],
  });

  const words = text.split(/\s+/);

  return (
    <div ref={container} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </div>
  );
};

"use client";

import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/utils/cn";

const Word = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const color = useTransform(progress, [start, end], ["#52525b", "#ffffff"]); // text-neutral-600 to white
  return (
    <motion.span className="mt-2 mr-2 md:mt-3 md:mr-3" style={{ color }}>
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

  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap", className)} ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            end={end}
            key={i}
            progress={scrollYProgress}
            start={start}
            word={word}
          />
        );
      })}
    </div>
  );
};

"use client";

import { motion } from "motion/react";
import { aboutMeEntries } from "@/app/-components/sections/expertise/constants";
import { cn } from "@/utils/cn";

const gridVariants = {
  inactive: {},
  active: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const ExpertiseSection = () => {
  return (
    <motion.div
      className="flex flex-col gap-24 py-16"
      id="expertise"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 className="font-light text-3xl text-white tracking-tight md:text-6xl lg:text-7xl">
          Precision Engineering
        </h2>
        <p className="max-w-sm text-base text-neutral-400 md:text-right">
          Building for the long term. Combining technical rigor with strategic
          foresight to deliver software that evolves as fast as your vision.
        </p>
      </div>

      <motion.div
        animate="active"
        className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        {aboutMeEntries.map((item, i) => (
          <motion.div
            className={cn(
              "flex w-full overflow-hidden bg-transparent",
              i % 2 === 0 ? "lg:col-start-2" : "lg:col-start-3"
            )}
            initial={{ opacity: 0, y: 30 }}
            key={i}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1 * i,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex h-full w-full flex-col gap-8 bg-transparent">
              <div className="shrink-0">{item.icon}</div>
              <div className="flex flex-col gap-y-4">
                <div className="text-2xl text-white tracking-tight">
                  {item.title}
                </div>
                <div className="text-base text-neutral-400 leading-relaxed">
                  {item.text}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

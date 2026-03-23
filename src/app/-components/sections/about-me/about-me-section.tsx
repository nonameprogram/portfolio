"use client";

import React from "react";
import { motion } from "motion/react";
import { aboutMeEntries } from "@/app/-components/sections/about-me/constants";
import { cn } from "@/utils/cn";

const gridVariants = {
  inactive: {},
  active: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const AboutMeSection = () => {
  return (
    <motion.div
      className="py-16 flex flex-col gap-24"
      id="about-me"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="flex w-full flex-col gap-y-4">
        <h2 className="text-3xl font-light tracking-tight md:text-6xl lg:text-7xl text-white">
          Technical expertise
        </h2>
        <p className="text-base text-neutral-400 max-w-sm">
          Everything you need. From strategic architecture to effective implementation.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        animate="active"
      >
        {aboutMeEntries.map((item, i) => (
          <motion.div
            key={i}
            className={cn(
              "flex w-full bg-transparent overflow-hidden",
              i % 2 === 0 ? "lg:col-start-2" : "lg:col-start-3"
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 * i }}
          >
            <div className="flex h-full w-full flex-col gap-8 bg-transparent">
              <div className="shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="text-2xl text-white tracking-tight">
                  {item.title}
                </div>
                <div className="text-base leading-relaxed text-neutral-400">
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

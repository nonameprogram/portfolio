"use client";

import { motion } from "motion/react";
import React from "react";
import { Pill } from "@/components/pill";
import { techStack } from "@/app/-components/sections/tech-stack/constants";
import { CertificatesSection } from "@/app/-components/sections/tech-stack/certificates-section";

const data = [
  {
    label: "Frontend",
    items: techStack.frontend,
  },
  {
    label: "UI / Styling",
    items: techStack.ui,
  },
  {
    label: "Form / Validation",
    items: techStack.form,
  },
  {
    label: "Backend",
    items: techStack.backend,
  },
  {
    label: "Testing / Documentation",
    items: techStack.testing,
  },
  {
    label: "Databases / ORM",
    items: techStack.databases,
  },
  {
    label: "Containers & CI/CD",
    items: techStack.containers,
  },
];

export const TechStackSection = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="techstack"
      >
        <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap">
          <div>02</div>
          <div>/</div>
          <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
            TechStack
          </div>
        </div>
        <div className="text-center inter-400">
          The tools and technologies I use to design, deploy, and operate
          infrastructure at work.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              className="pr-4 pt-4 w-full h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
              key={index}
            >
              <div className="relative w-full h-full group">
                <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
                <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                  <div className="text-sm inter-500">{item.label}</div>
                  <div className="flex flex-wrap gap-2 text-sm mt-4">
                    {item.items.map((tech, index) => (
                      <Pill key={index} content={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CertificatesSection />
    </div>
  );
};

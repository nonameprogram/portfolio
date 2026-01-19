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
        <div className="lora-400 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl">
          <div>02</div>
          <div>/</div>
          <div className="bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text whitespace-nowrap text-transparent">
            TechStack
          </div>
        </div>
        <div className="inter-400 text-center">
          The tools and technologies I use to design, deploy, and operate
          infrastructure at work.
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.map((item, index) => (
            <motion.div
              className="h-full w-full pt-4 pr-4"
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
              <div className="group relative h-full w-full">
                <div className="absolute -top-4 -right-4 h-full w-full bg-neutral-900 transition-colors duration-300 group-hover:bg-violet-900" />
                <div className="bg-secondary-bg relative z-10 h-full w-full border border-neutral-700 p-4">
                  <div className="inter-500 text-sm">{item.label}</div>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
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

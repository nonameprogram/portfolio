"use client";

import { motion } from "motion/react";
import { CertificatesSection } from "@/app/-components/sections/tech-stack/certificates-section";
import { techStack } from "@/app/-components/sections/tech-stack/constants";
import { Pill } from "@/components/pill";
import { cn } from "@/utils/cn";

const data = [
  {
    label: "Frontend",
    items: techStack.frontend,
    className: "col-span-12 lg:col-span-8 lg:col-start-3",
  },
  {
    label: "UI / Styling",
    items: techStack.ui,
    className: "col-span-12 lg:col-span-6 xl:col-span-4",
  },
  {
    label: "Form / Validation",
    items: techStack.form,
    className: "col-span-12 lg:col-span-6 xl:col-span-4",
  },
  {
    label: "Backend",
    items: techStack.backend,
    className: "col-span-12 lg:col-span-6 xl:col-span-4",
  },
  {
    label: "Testing / Documentation",
    items: techStack.testing,
    className: "col-span-12 lg:col-span-6 xl:col-span-6",
  },
  {
    label: "Databases / ORM",
    items: techStack.databases,
    className: "col-span-12 lg:col-span-6 xl:col-span-6",
  },
  {
    label: "Containers & CI/CD",
    items: techStack.containers,
    className: "col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-5",
  },
];

export const TechStackSection = () => {
  return (
    <div className="space-y-8">
      <motion.div
        className="flex flex-col gap-16 py-16"
        id="techstack"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="lora-400 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl">
          <div>02</div>
          <div>/</div>
          <div className="whitespace-nowrap bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text text-transparent">
            TechStack
          </div>
        </div>
        <div className="inter-400 text-center">
          The tools and technologies I use to design, deploy, and operate
          infrastructure at work.
        </div>
        <div className="grid grid-cols-12 gap-8">
          {data.map((item, index) => (
            <motion.div
              className={cn(
                "col-span-12 h-full w-full pt-4 pr-4",
                item.className
              )}
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="group relative h-full w-full">
                <div className="absolute -top-4 -right-4 h-full w-full bg-neutral-900 transition-colors duration-300 group-hover:bg-violet-900" />
                <div className="relative z-10 h-full w-full border border-neutral-700 bg-secondary-bg p-4">
                  <div className="inter-500 text-sm">{item.label}</div>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    {item.items.map((tech, index) => (
                      <Pill content={tech} key={index} />
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

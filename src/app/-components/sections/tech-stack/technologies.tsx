"use client";

import { motion } from "motion/react";
import React from "react";
import { Pill } from "@/components/pill";
import { techStack, techStacks } from "@/app/-components/sections/tech-stack/constants";
import { CertificatesSection } from "@/app/-components/sections/tech-stack/certificates-section";
import { cn } from "@/utils/cn";
import { LogoTicker } from "@/components/logo-ticker";
import { SiNestjs, SiNestjsHex } from "@icons-pack/react-simple-icons";

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

export const Technologies = () => {
  return (
    <div className="space-y-8">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="techstack"
      >
        <div className="flex flex-col md:flex-row gap-8 justify-between md:items-end w-full">
          <h2 className="text-3xl font-light tracking-tight md:text-6xl lg:text-7xl text-white">
            Technologies
          </h2>
          <p className="text-base text-neutral-400 max-w-sm md:text-right">
            A comprehensive list of the tools and technologies I use to build robust and scalable applications.
          </p>
        </div>
        <div className="flex w-full flex-col overflow-hidden">
          <LogoTicker columns={techStacks} className="w-full" />
        </div>
      </motion.div>

      <CertificatesSection />
    </div>
  );
};

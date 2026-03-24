"use client";

import { motion } from "motion/react";
import { techStacks } from "@/app/-components/sections/tech-stack/constants";
import { CertificatesSection } from "@/app/-components/sections/tech-stack/certificates-section";
import { LogoTicker } from "@/components/logo-ticker";

export const Technologies = () => {
  return (
    <div className="space-y-8" id="tech">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-between md:items-end w-full">
          <h2 className="text-3xl font-light tracking-tight md:text-6xl lg:text-7xl text-white">
            Technologies
          </h2>
          <p className="text-base text-neutral-400 max-w-sm md:text-right">
            Professional-grade tools and frameworks I've implemented in production environments to build robust, scalable, and high-performance applications.
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

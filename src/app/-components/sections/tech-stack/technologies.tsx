"use client";

import { motion } from "motion/react";
import { CertificatesSection } from "@/app/-components/sections/tech-stack/certificates-section";
import { techStacks } from "@/app/-components/sections/tech-stack/constants";
import { LogoTicker } from "@/components/logo-ticker";

export const Technologies = () => {
  return (
    <div className="space-y-8" id="tech">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-light text-3xl text-white tracking-tight md:text-6xl lg:text-7xl">
            Technologies
          </h2>
          <p className="max-w-sm text-base text-neutral-400 md:text-right">
            Professional-grade tools and frameworks I've implemented in
            production environments to build robust, scalable, and
            high-performance applications.
          </p>
        </div>
        <div className="flex w-full flex-col overflow-hidden">
          <LogoTicker className="w-full" columns={techStacks} />
        </div>
      </motion.div>

      <CertificatesSection />
    </div>
  );
};

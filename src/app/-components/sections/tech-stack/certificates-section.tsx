"use client";

import { motion } from "motion/react";
import React from "react";
import { ArrowTopRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { CircleDashedIcon } from "lucide-react";
import { certifications } from "@/app/-components/sections/tech-stack/constants";
import { AnimatedLink } from "@/components/animated-link-2";

export const CertificatesSection = () => {
  return (
    <div className="flex flex-col gap-16 py-16">
      <motion.div
        className="flex flex-col md:flex-row gap-8 justify-between md:items-end w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-light tracking-tight md:text-6xl lg:text-7xl text-white">
          Recent Certificates
        </h2>
        <p className="text-base text-neutral-400 max-w-sm md:text-right">
          A list of my professional certifications and achievements.
        </p>
      </motion.div>

      <div className="flex flex-col w-full">
        {certifications.filter(item => item.certificate.completed).map((item, index) => (
          <motion.div
            className="group mb-8 w-full"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 * index,
            }}
          >
            <div className="flex justify-between items-start pb-8">
              <div className="flex flex-col gap-y-2">
                <div className="text-xl md:text-2xl text-white">
                  {item.certificate.label}
                </div>
                <AnimatedLink href={item.provider.url} name={item.provider.name} />
              </div>
              <div className="flex flex-col items-end gap-y-3">
                <div className="text-right text-base md:text-lg text-neutral-400">
                  {item.certificate.issueDate}
                </div>
                {item.certificate.credentialUrl ? (
                  <a href={item.certificate.credentialUrl} className="text-white hover:text-neutral-300 transition-colors">
                    <div className="flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors py-1.5 pr-3 pl-4">
                      <span className="text-sm">Credential</span>
                      <ArrowTopRightIcon className="size-4" />
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 rounded-full border border-neutral-800 text-neutral-500 py-1.5 pr-3 pl-4">
                    <span className="text-sm">In Progress</span>
                    <CircleDashedIcon className="size-4" />
                  </div>
                )}
              </div>
            </div>
            <div className="h-px w-full bg-neutral-800 group-last:hidden" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

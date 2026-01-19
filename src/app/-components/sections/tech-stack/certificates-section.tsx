"use client";

import { motion } from "motion/react";
import React from "react";
import { ArrowTopRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { CircleDashedIcon } from "lucide-react";
import { certifications } from "@/app/-components/sections/tech-stack/constants";
import { AnimatedLink } from "@/components/animated-link";

export const CertificatesSection = () => {
  return (
    <React.Fragment>
      <motion.div
        className="lora-400 text-center text-2xl bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text whitespace-nowrap text-transparent mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        Recent Certifications
      </motion.div>

      {certifications.map((item, index) => (
        <motion.div
          className="space-y-4 mb-8 group"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3 + 0.15 * index,
          }}
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-1">
              <div className="inter-400 text-lg text-violet-300">
                {item.certificate.label}
              </div>
              <AnimatedLink href={item.provider.url} className="gap-1 w-max">
                <div className="inter-400 text-sm">{item.provider.name}</div>
                <ExternalLinkIcon />
              </AnimatedLink>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <div className="inter-400 text-lg text-right">
                {item.certificate.issueDate}
              </div>
              {item.certificate.credentialUrl ? (
                <a href={item.certificate.credentialUrl}>
                  <div className="flex items-center gap-1 py-1 pl-3 pr-2 rounded-full border border-neutral-800">
                    <span className="text-xs">Credential</span>
                    <ArrowTopRightIcon className="size-4" />
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-1 py-1 pl-3 pr-2 rounded-full border border-neutral-800">
                  <span className="text-xs">In Progress</span>
                  <CircleDashedIcon className="size-3" />
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-px bg-neutral-800 group-last:hidden" />
        </motion.div>
      ))}
    </React.Fragment>
  );
};

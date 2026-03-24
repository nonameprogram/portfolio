"use client";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { CircleDashedIcon } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "@/app/-components/sections/tech-stack/constants";
import { AnimatedLink } from "@/components/animated-link";

export const CertificatesSection = () => {
  return (
    <div className="flex flex-col gap-16 py-16">
      <motion.div
        className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-end"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-light text-3xl text-white tracking-tight md:text-6xl lg:text-7xl">
          Recent Certificates
        </h2>
        <p className="max-w-sm text-base text-neutral-400 md:text-right">
          A list of my professional certifications and achievements.
        </p>
      </motion.div>

      <div className="flex w-full flex-col">
        {certifications
          .filter((item) => item.certificate.completed)
          .map((item, index) => (
            <motion.div
              className="group/cert mb-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between pb-8">
                <div className="flex flex-col gap-y-2">
                  <div className="text-white text-xl md:text-2xl">
                    {item.certificate.label}
                  </div>
                  <AnimatedLink
                    href={item.provider.url}
                    name={item.provider.name}
                  />
                </div>
                <div className="flex flex-col items-end gap-y-3">
                  <div className="text-right text-base text-neutral-400 md:text-lg">
                    {item.certificate.issueDate}
                  </div>
                  {item.certificate.credentialUrl ? (
                    <a
                      className="text-white transition-colors hover:text-neutral-300"
                      href={item.certificate.credentialUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex items-center gap-2 rounded-full border border-neutral-700 py-1.5 pr-3 pl-4 transition-colors hover:border-neutral-500">
                        <span className="text-sm">Credential</span>
                        <ArrowTopRightIcon className="size-4" />
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 rounded-full border border-neutral-800 py-1.5 pr-3 pl-4 text-neutral-500">
                      <span className="text-sm">In Progress</span>
                      <CircleDashedIcon className="size-4" />
                    </div>
                  )}
                </div>
              </div>
              <div className="h-px w-full bg-neutral-800 group-last/cert:hidden" />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

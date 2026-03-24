"use client";

import { motion } from "motion/react";
import { AnimatedLink } from "@/components/animated-link";
import { Marquee } from "@/components/marquee";
import { SectionContainer } from "@/components/section-container";

export const ContactSection = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden" id="contact">
      <div className="relative overflow-visible py-24">
        <div className="relative left-1/2 w-[110%] -translate-x-1/2 -rotate-[2.5deg] scale-105 border-neutral-300 border-y bg-neutral-200 py-1.5">
          <Marquee className="[--duration:30s] [--gap:4rem]" repeat={6}>
            <div className="flex items-center gap-12 whitespace-nowrap font-bold text-[10px] text-neutral-900 uppercase tracking-widest">
              <span>PRECISION ENGINEERING</span>
              <div className="size-1 rounded-full bg-neutral-900" />
              <span>STRUCTURAL INTEGRITY</span>
              <div className="size-1 rounded-full bg-neutral-900" />
              <span>HIGH-PERFORMANCE SYSTEMS</span>
              <div className="size-1 rounded-full bg-neutral-900" />
              <span>SCALABLE ARCHITECTURE</span>
              <div className="size-1 rounded-full bg-neutral-900" />
              <span>BEYOND BEST PRACTICES</span>
              <div className="size-1 rounded-full bg-neutral-900" />
            </div>
          </Marquee>
        </div>
      </div>

      <SectionContainer className="flex min-h-[70vh] flex-col justify-between py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="max-w-7xl font-light text-5xl leading-[0.9] tracking-tight md:text-6xl lg:text-8xl">
            Bridging the gap
            <br />
            between humans and
            <br />
            digital experiences
          </h2>
        </motion.div>
        <motion.div
          className="mt-48 flex flex-col items-start justify-between gap-16 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-2">
            <span className="font-medium text-neutral-400">For work:</span>
            <a
              className="font-light text-2xl tracking-tight transition-opacity hover:opacity-70 md:text-4xl"
              href="mailto:contact@bkosinski.dev"
            >
              contact@bkosinski.dev
            </a>
          </div>
          <div className="flex flex-row flex-wrap gap-16 md:gap-32">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-neutral-400">Socials</span>
              <div className="flex flex-col gap-3">
                <AnimatedLink
                  href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/"
                  name="LinkedIn"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-neutral-400">GitHub</span>
              <div className="flex flex-col gap-3">
                <AnimatedLink
                  href="https://github.com/nonameprogram"
                  name="Personal"
                />
                <AnimatedLink href="https://github.com/whatisphp" name="Work" />
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
};

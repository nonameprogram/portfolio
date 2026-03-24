"use client";

import React from "react";
import { motion } from "motion/react";

function AnimatedLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-2 text-xl font-medium w-fit"
    >
      <div className="relative overflow-hidden w-full">
        <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex flex-col delay-0 group-hover:delay-300">
          <span>{name}</span>
          <span className="absolute top-full left-0">{name}</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-0" />
      </div>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}

import { Marquee } from "@/components/marquee";
import { SectionContainer } from "@/components/section-container";

export const ContactSection = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden" id="contact">
      <div className="py-24 relative overflow-visible">
        <div className="w-[110%] bg-neutral-200 py-1.5 border-y border-neutral-300 -rotate-[2.5deg] -translate-x-1/2 left-1/2 relative scale-105">
          <Marquee className="[--duration:30s] [--gap:4rem]" repeat={6}>
            <div className="flex items-center gap-12 text-neutral-900 font-bold uppercase text-[10px] tracking-widest whitespace-nowrap">
              <span>PRECISION ENGINEERING</span>
              <div className="size-1 bg-neutral-900 rounded-full" />
              <span>STRUCTURAL INTEGRITY</span>
              <div className="size-1 bg-neutral-900 rounded-full" />
              <span>HIGH-PERFORMANCE SYSTEMS</span>
              <div className="size-1 bg-neutral-900 rounded-full" />
              <span>SCALABLE ARCHITECTURE</span>
              <div className="size-1 bg-neutral-900 rounded-full" />
              <span>BEYOND BEST PRACTICES</span>
              <div className="size-1 bg-neutral-900 rounded-full" />
            </div>
          </Marquee>
        </div>
      </div>

      <SectionContainer className="text-white py-24 min-h-[70vh] flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-tight leading-[0.9] max-w-7xl">
          Bridging the gap<br />
          between humans and<br />
          digital experiences
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mt-48 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 font-medium">For work:</span>
            <a
              className="text-2xl md:text-4xl hover:opacity-70 transition-opacity tracking-tight font-light"
              href="mailto:contact@bkosinski.dev"
            >
              contact@bkosinski.dev
            </a>
          </div>
          <div className="flex flex-row flex-wrap gap-16 md:gap-32">
            <div className="flex flex-col gap-4">
              <span className="text-neutral-400 font-medium">Socials</span>
              <div className="flex flex-col gap-3">
                <AnimatedLink name="LinkedIn" href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-neutral-400 font-medium">GitHub</span>
              <div className="flex flex-col gap-3">
                <AnimatedLink name="Personal" href="https://github.com/nonameprogram" />
                <AnimatedLink name="Work" href="https://github.com/whatisphp" />
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
};

"use client";

import { motion, useTransform } from "motion/react";
import PageContent from "./-components/page-content";
import React from "react";
import { useScroll } from "motion/react";
import {
  BrainIcon,
  BriefcaseBusinessIcon,
  LayersIcon,
  MailIcon,
  RocketIcon,
} from "lucide-react";
import PixelBlast from "@/components/pixel-blast";

export default function Home() {
  const ref = React.useRef(null);

  return (
    <div className="flex flex-col">
      <div
        className="flex w-full flex-col relative"
        style={{ height: "75dvh" }}
        ref={ref}
      >
        <div className="absolute w-full h-full left-0 top-0">
          <img src="/hero-bg.jpg" alt="hero-bg" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <motion.div
          className="relative flex h-full w-full grow items-center px-48 md:px-48"
        >
          <motion.div className="flex flex-col items-start space-y-4 text-left max-w-160">
            <h1 className="text-4xl font-light tracking-tight md:text-6xl lg:text-8xl">
              Fullstack Developer
            </h1>
            <h2 className="text-lg font-light md:text-3xl">
              For insurance, engineering, financial markets, corporate, and international development
            </h2>
          </motion.div>

          {/* <motion.div 
            className="absolute bottom-24 left-6 flex max-w-[80vw] flex-wrap gap-2 md:bottom-36 md:left-48"
          >
            {[
              "Backend Development",
              "Frontend Development",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white px-3 py-1.5 text-xs font-medium text-black md:px-4 md:py-2 md:text-sm"
              >
                {skill}
              </div>
            ))}
          </motion.div> */}

          <motion.div 
            className="absolute bottom-6 left-6 md:bottom-12 md:left-48 flex flex-col gap-6 z-10"
          >
            <div className="flex flex-col gap-1">
              <span className="text-white font-medium text-lg md:text-xl">Let's work together</span>
              <span className="text-neutral-400 text-sm md:text-base">Based in Jastrzębie-Zdrój, Poland</span>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src="/img2.png" 
                alt="Bartłomiej Kosiński" 
                className="h-12 md:h-16 w-auto object-contain select-none pointer-events-none" 
              />
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm md:text-base tracking-wide">Bartłomiej Kosiński</span>
                <span className="text-neutral-400 text-xs md:text-sm">contact@bkosinski.dev</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <PageContent />
    </div>
  );
}

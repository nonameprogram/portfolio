"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { SectionContainer } from "@/components/section-container";
import PageContent from "./-components/page-content";

export default function Home() {
  const ref = React.useRef(null);

  return (
    <div className="flex flex-col">
      <div
        className="relative flex w-full flex-col"
        ref={ref}
        style={{ height: "75dvh" }}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            alt="hero-bg"
            className="object-cover"
            fill
            priority
            src="/hero-bg.jpg"
          />
          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <SectionContainer className="relative flex h-full grow items-center">
          <motion.div className="flex max-w-160 flex-col items-start space-y-4 text-left">
            <h1 className="font-light text-5xl tracking-tight md:text-6xl lg:text-8xl">
              Fullstack Developer
            </h1>
            <h2 className="font-light text-xl md:text-3xl">
              Digital Experiences with Passion and Precision
            </h2>
          </motion.div>

          <motion.div className="absolute bottom-6 left-6 z-10 flex flex-col gap-6 md:bottom-12 md:left-24 lg:left-48">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-lg text-white md:text-xl">
                Let's work together
              </span>
              <span className="text-neutral-400 text-sm md:text-base">
                Based in Jastrzębie-Zdrój, Poland
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                alt="Bartłomiej Kosiński"
                className="pointer-events-none h-12 w-auto select-none object-contain md:h-16"
                height={64}
                src="/img2.png"
                width={64}
              />
              <div className="flex flex-col">
                <span className="font-medium text-sm text-white tracking-wide md:text-base">
                  Bartłomiej Kosiński
                </span>
                <span className="text-neutral-400 text-xs md:text-sm">
                  contact@bkosinski.dev
                </span>
              </div>
            </div>
          </motion.div>
        </SectionContainer>
      </div>
      <PageContent />
    </div>
  );
}

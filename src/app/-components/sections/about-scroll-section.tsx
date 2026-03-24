"use client";

import { SectionContainer } from "@/components/section-container";
import { TextReveal } from "@/components/text-reveal";

export const AboutScrollSection = () => {
  return (
    <SectionContainer
      className="flex min-h-[50vh] items-center justify-center py-24"
      id="about"
    >
      <TextReveal
        className="font-light text-2xl tracking-tight md:text-4xl lg:text-5xl"
        text="I am a passionate software developer dedicated to building impactful digital solutions. I thrive on challenges, balancing strategic architecture with hands-on coding. My goal is to create memorable, high-performance web applications that merge stunning design with flawless functionality."
      />
    </SectionContainer>
  );
};

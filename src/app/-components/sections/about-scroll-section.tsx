"use client";

import { TextReveal } from "@/components/text-reveal";
import { SectionContainer } from "@/components/section-container";

export const AboutScrollSection = () => {
  return (
    <SectionContainer 
      className="py-24 flex items-center justify-center min-h-[50vh]" 
      id="about"
    >
      <TextReveal 
        text="I am a passionate software developer dedicated to building impactful digital solutions. I thrive on challenges, balancing strategic architecture with hands-on coding. My goal is to create memorable, high-performance web applications that merge stunning design with flawless functionality." 
        className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight"
      />
    </SectionContainer>
  );
};

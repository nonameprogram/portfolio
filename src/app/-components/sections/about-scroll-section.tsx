"use client";

import { TextReveal } from "@/components/text-reveal";

export const AboutScrollSection = () => {
  return (
    <div className="w-full px-6 sm:px-48 py-24 flex items-center justify-center min-h-[50vh]">
      <TextReveal 
        text="I am a passionate software developer dedicated to building impactful digital solutions. I thrive on challenges, balancing strategic architecture with hands-on coding. My goal is to create memorable, high-performance web applications that merge stunning design with flawless functionality." 
        className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight"
      />
    </div>
  );
};

import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import { AboutMeSection } from "@/app/-components/sections/about-me/about-me-section";
import { Technologies } from "@/app/-components/sections/tech-stack/technologies";
import { ExpertiseCarousel } from "@/app/-components/sections/expertise-carousel";
import { ContactSection } from "@/app/-components/sections/contact-section";
import { ScrollText } from "@/components/scroll-text";
import { AboutScrollSection } from "@/app/-components/sections/about-scroll-section";

export default function PageContent() {
  return (
    <div className="bg-secondary-bg relative flex flex-col">
      <div className="relative flex grow flex-col gap-24 pb-24 pt-16">
        <div className="w-full flex flex-col gap-12">
          <ScrollText />
          <ExpertiseCarousel />
          <AboutScrollSection />
        </div>
        
<div className="px-6 sm:px-48 flex flex-col gap-24">
          <AboutMeSection />
          <Technologies />
        </div>

        <ContactSection />
      </div>
    </div>
  );
}

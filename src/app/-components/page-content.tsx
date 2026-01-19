import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import { AboutMeSection } from "@/app/-components/sections/about-me-section";
import { TechStackSection } from "@/app/-components/sections/tech-stack-section";
import { CareerSection } from "@/app/-components/sections/career-section";
import { ContactSection } from "@/app/-components/sections/contact-section";
import { ProjectsSection } from "@/app/-components/sections/projects-section";
import { Separator } from "@/components/separator";

export default function PageContent() {
  return (
    <div className="relative flex flex-col bg-secondary-bg rounded-t-4xl">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col gap-16 relative grow !max-w-7xl">
        <div className="flex gap-x-4 relative">
          <div className="grid grid-cols-1 gap-24 relative">
            <div className="col-span-3 xl:col-span-2">
              <AboutMeSection />
              <Separator />
              <TechStackSection />
              <Separator />
              <CareerSection />
              <Separator />
              <ProjectsSection />
              <Separator />
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import { AboutMeSection } from "@/app/-components/sections/about-me/about-me-section";
import { TechStackSection } from "@/app/-components/sections/tech-stack/tech-stack-section";
import { CareerSection } from "@/app/-components/sections/career/career-section";
import { ContactSection } from "@/app/-components/sections/contact-section";
import { ProjectsSection } from "@/app/-components/sections/projects-section";
import { Separator } from "@/components/separator";

export default function PageContent() {
  return (
    <div className="bg-secondary-bg relative flex flex-col rounded-t-4xl">
      <div className="relative container mx-auto flex !max-w-7xl grow flex-col gap-16 px-6 sm:px-12">
        <div className="relative flex gap-x-4">
          <div className="relative grid grid-cols-1 gap-24">
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

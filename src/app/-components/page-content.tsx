import { AboutScrollSection } from "@/app/-components/sections/about-scroll-section";
import { ContactSection } from "@/app/-components/sections/contact-section";
import { ExpertiseSection } from "@/app/-components/sections/expertise/expertise-section";
import { ProcessSection } from "@/app/-components/sections/process/process-section";
import { Technologies } from "@/app/-components/sections/tech-stack/technologies";
import { SectionContainer } from "@/components/section-container";

export default function PageContent() {
  return (
    <div className="relative flex flex-col bg-secondary-bg">
      <div className="relative flex grow flex-col gap-24 pt-16 pb-24">
        <AboutScrollSection />

        <SectionContainer className="flex flex-col gap-24">
          <ExpertiseSection />
          <Technologies />
          <ProcessSection />
        </SectionContainer>

        <ContactSection />
      </div>
    </div>
  );
}

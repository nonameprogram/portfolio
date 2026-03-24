import "react-medium-image-zoom/dist/styles.css";
import { AboutScrollSection } from "@/app/-components/sections/about-scroll-section";
import { ContactSection } from "@/app/-components/sections/contact-section";
import { ExpertiseSection } from "@/app/-components/sections/expertise/expertise-section";
import { ExpertiseCarousel } from "@/app/-components/sections/expertise-carousel";
import { Technologies } from "@/app/-components/sections/tech-stack/technologies";
import { ScrollText } from "@/components/scroll-text";
import { SectionContainer } from "@/components/section-container";

export default function PageContent() {
  return (
    <div className="relative flex flex-col bg-secondary-bg">
      <div className="relative flex grow flex-col gap-24 pt-16 pb-24">
        <div className="flex w-full flex-col gap-12">
          <ScrollText />
          <ExpertiseCarousel />
          <AboutScrollSection />
        </div>

        <SectionContainer className="flex flex-col gap-24">
          <ExpertiseSection />
          <Technologies />
        </SectionContainer>

        <ContactSection />
      </div>
    </div>
  );
}

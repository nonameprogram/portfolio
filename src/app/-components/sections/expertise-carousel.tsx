"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionContainer } from "@/components/section-container";

const DATA = [
  {
    title: "AI\nPrototyping",
    desc: "Accelerating the validation of your vision. Using cutting-edge AI to rapid-fire prototype user experiences and technical benchmarks.",
    category: "Innovation",
  },
  {
    title: "The Shared\nBlueprint",
    desc: "The key to long-lived apps with many developers. Clear, maintainable insights that empower collaboration across the entire development process.",
    category: "Documentation",
  },
  {
    title: "Zero\nSurprises",
    desc: "The driver of customer satisfaction. Well-tested applications that run flawlessly, instill confidence, and never frustrate the user.",
    category: "Testing",
  },
  {
    title: "Architecting\nfor Change",
    desc: "Building clean, adaptable structures that embrace new requirements. A scalable foundation that grows right alongside your business goals.",
    category: "Architecture",
  },
  {
    title: "Frictionless\nDelivery",
    desc: "Automating the path from code to production. Ensuring seamless, predictable deployments so features reach users faster and safer.",
    category: "Automation",
  },
  {
    title: "Uncompromising\nSpeed",
    desc: "Optimizing execution to the millisecond. Delivering lightning-fast digital experiences that keep your users engaged and fully satisfied.",
    category: "Optimization",
  }
];

export const ExpertiseCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full bg-secondary-bg py-8 overflow-hidden relative">
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex -ml-6">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="group relative flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_28%] pl-6"
            >
              <div className="h-full border border-[#eae6de] bg-[#fdfcfa] px-10 py-14 min-h-[600px] flex flex-col justify-start cursor-pointer hover:bg-[#f6f4ee] transition-colors duration-500 ease-out shadow-sm select-none">
                <h3 className="text-2xl md:text-3xl font-medium text-[#111] leading-snug whitespace-pre-line group-hover:text-emerald-900 transition-colors duration-300">
                  {item.title}
                </h3>
                <div 
                  className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out mt-4"
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-lg text-[#555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-8 flex items-end">
                  <span className="text-sm tracking-widest uppercase text-[#aaa] group-hover:text-[#888] transition-colors duration-300">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SectionContainer className="mt-12 flex gap-4">
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous Slide"
          className={`flex items-center justify-center w-14 h-14 border transition-colors duration-300 ${
            prevBtnDisabled 
              ? "border-[#555] text-[#555] cursor-not-allowed" 
              : "border-white text-white hover:bg-white hover:text-black cursor-pointer"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next Slide"
          className={`flex items-center justify-center w-14 h-14 border transition-colors duration-300 ${
            nextBtnDisabled 
              ? "border-[#555] text-[#555] cursor-not-allowed" 
              : "border-white text-white hover:bg-white hover:text-black cursor-pointer"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </button>
      </SectionContainer>
    </div>
  );
};

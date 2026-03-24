"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
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
  },
];

export const ExpertiseCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden bg-secondary-bg py-8">
      <div className="overflow-visible" ref={emblaRef}>
        <div className="-ml-6 flex">
          {DATA.map((item, index) => (
            <div
              className="group relative flex-[0_0_85%] pl-6 md:flex-[0_0_45%] lg:flex-[0_0_28%]"
              key={index}
            >
              <div className="flex h-full min-h-[600px] cursor-pointer select-none flex-col justify-start border border-[#eae6de] bg-[#fdfcfa] px-10 py-14 shadow-sm transition-colors duration-500 ease-out hover:bg-[#f6f4ee]">
                <h3 className="whitespace-pre-line font-medium text-2xl text-[#111] leading-snug transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  {item.title}
                </h3>
                <div className="mt-4 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-4 text-[#555] text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex items-end pt-8">
                  <span className="text-[#aaa] text-sm uppercase tracking-widest transition-colors duration-300 group-hover:text-[#888]">
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
          aria-label="Previous Slide"
          className={`flex h-14 w-14 items-center justify-center border transition-colors duration-300 ${
            prevBtnDisabled
              ? "cursor-not-allowed border-[#555] text-[#555]"
              : "cursor-pointer border-white text-white hover:bg-white hover:text-black"
          }`}
          disabled={prevBtnDisabled}
          onClick={scrollPrev}
          type="button"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </button>
        <button
          aria-label="Next Slide"
          className={`flex h-14 w-14 items-center justify-center border transition-colors duration-300 ${
            nextBtnDisabled
              ? "cursor-not-allowed border-[#555] text-[#555]"
              : "cursor-pointer border-white text-white hover:bg-white hover:text-black"
          }`}
          disabled={nextBtnDisabled}
          onClick={scrollNext}
          type="button"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </button>
      </SectionContainer>
    </div>
  );
};

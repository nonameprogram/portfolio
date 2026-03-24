"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import type { MouseEvent } from "react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { SectionContainer } from "./section-container";

const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Expertise", link: "#expertise" },
  { name: "Technologies", link: "#tech" },
  { name: "Contact", link: "#contact" },
];

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith("#") && link.length > 1) {
      e.preventDefault();
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      animate={hidden ? "hidden" : "visible"}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      )}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
    >
      <SectionContainer className="flex items-center justify-end gap-6 py-4">
        {navItems.map((item) => (
          <a
            className="font-medium text-white transition-colors hover:text-neutral-300"
            href={item.link}
            key={item.name}
            onClick={(e) => handleClick(e, item.link)}
          >
            {item.name}
          </a>
        ))}
      </SectionContainer>
    </motion.div>
  );
};

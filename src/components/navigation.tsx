"use client";

import type { ReactNode, MouseEvent } from "react";
import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
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
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <SectionContainer className={cn(
        "flex items-center justify-end gap-6 py-4 transition-all duration-300",
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      )}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            onClick={(e) => handleClick(e, item.link)}
            className="font-medium text-white transition-colors hover:text-neutral-300"
          >
            {item.name}
          </a>
        ))}
      </SectionContainer>
    </motion.div>
  );
};

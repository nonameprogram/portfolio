"use client";

import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { SectionContainer } from "./section-container";

const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Expertise", link: "#expertise" },
  { name: "Technologies", link: "#tech" },
  { name: "Contact", link: "#contact" },
];

const HIDE_SCROLL_THRESHOLD = 150;
const SCROLLED_SCROLL_THRESHOLD = 50;

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (
      !isMobileMenuOpen &&
      latest > previous &&
      latest > HIDE_SCROLL_THRESHOLD
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > SCROLLED_SCROLL_THRESHOLD);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
    setIsMobileMenuOpen(false);

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
    <>
      <motion.div
        animate={hidden ? "hidden" : "visible"}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300",
          scrolled || isMobileMenuOpen
            ? "bg-black/80 backdrop-blur-lg"
            : "bg-transparent"
        )}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
      >
        <SectionContainer className="flex items-center justify-start gap-6 py-4 md:justify-end">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                className="group relative font-medium text-white transition-colors"
                href={item.link}
                key={item.name}
                onClick={(e) => handleClick(e, item.link)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            className="relative z-[60] ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 md:ml-0 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  key="close"
                  transition={{ duration: 0.2 }}
                >
                  <XIcon className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  key="menu"
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </SectionContainer>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex h-full flex-col items-start justify-start gap-6 p-8 pt-24">
              {navItems.map((item, index) => (
                <motion.a
                  animate={{ opacity: 1, x: 0 }}
                  className="group relative font-semibold text-2xl text-white tracking-tight transition-colors"
                  href={item.link}
                  initial={{ opacity: 0, x: -10 }}
                  key={item.name}
                  onClick={(e) => handleClick(e, item.link)}
                  transition={{ delay: 0.05 + index * 0.03, duration: 0.3 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

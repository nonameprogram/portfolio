"use client";

import { useLenis } from "lenis/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
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
  const lenis = useLenis();
  const navRef = useRef<HTMLDivElement>(null);

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

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    if (!lenis) {
      return;
    }
    if (isMobileMenuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isMobileMenuOpen, lenis]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
    if (!link.startsWith("#")) {
      return;
    }
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const section = link.length > 1 ? document.querySelector(link) : null;
    if (link.length > 1 && !section) {
      return;
    }

    if (!lenis) {
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ behavior: "smooth", top: 0 });
      }
      return;
    }

    // The nav hides while scrolling down and reappears while scrolling up,
    // so only upward jumps need room for it above the section.
    const targetTop = section
      ? section.getBoundingClientRect().top + window.scrollY
      : 0;
    const navHeight = navRef.current?.offsetHeight ?? 0;
    const offset = targetTop < window.scrollY ? -navHeight : 0;

    // The menu may have just stopped Lenis; resume before scrolling.
    lenis.start();
    lenis.scrollTo(section ?? 0, { duration: 1.2, offset });
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
        ref={navRef}
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

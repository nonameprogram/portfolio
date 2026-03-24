"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: conditional cursor style
        dangerouslySetInnerHTML={{
          __html: `
        @media (pointer: fine) {
          body, a, button, input, [role="button"], label {
            cursor: none !important;
          }
        }
      `,
        }}
      />

      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering
            ? "rgba(59, 130, 246, 0.1)"
            : "rgba(59, 130, 246, 0)",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden rounded-full border border-blue-500 md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 40,
          height: 40,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden rounded-full bg-blue-500 md:block"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
      />
    </>
  );
};

"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const SIZE = 10;
const HOVER_SIZE = 32;
const PRESSED_SCALE = 0.8;
// Scale the square grows from when it appears and shrinks to when it leaves.
const HIDDEN_SCALE = 0.5;

// Critically damped (damping ≈ 2·√(stiffness·mass)): the square catches up
// smoothly without overshooting and settles exactly on the real pointer.
const FOLLOW_SPRING = {
  damping: 20,
  mass: 0.5,
  restDelta: 0.01,
  stiffness: 200,
};

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], label, summary, input, select, textarea";
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
// Hides the native cursor (see globals.css). Added only once the pointer
// position is known, so there is never a moment without any cursor.
const ACTIVE_CLASS = "has-custom-cursor";

export const CustomCursor = () => {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const visibleRef = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, FOLLOW_SPRING);
  const springY = useSpring(y, FOLLOW_SPRING);

  useEffect(() => {
    const media = window.matchMedia(FINE_POINTER_QUERY);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const root = document.documentElement;

    const show = (clientX: number, clientY: number) => {
      // Appear right where the pointer is instead of flying in.
      x.jump(clientX);
      y.jump(clientY);
      springX.jump(clientX);
      springY.jump(clientY);
      root.classList.add(ACTIVE_CLASS);
      visibleRef.current = true;
      setVisible(true);
    };

    const hide = () => {
      visibleRef.current = false;
      setVisible(false);
      setPressed(false);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        return;
      }
      if (visibleRef.current) {
        x.set(e.clientX);
        y.set(e.clientY);
      } else {
        show(e.clientX, e.clientY);
      }
    };

    const onOver = (e: PointerEvent) => {
      onMove(e);
      const target = e.target instanceof Element ? e.target : null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        hide();
      }
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        setPressed(true);
      }
    };
    const onUp = () => setPressed(false);

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("blur", hide);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", hide);
      root.classList.remove(ACTIVE_CLASS);
      visibleRef.current = false;
    };
  }, [enabled, x, y, springX, springY]);

  if (!enabled) {
    return null;
  }

  const size = hovering ? HOVER_SIZE : SIZE;
  const pressedScale = pressed ? PRESSED_SCALE : 1;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex size-0 items-center justify-center mix-blend-difference"
      style={{
        x: reduceMotion ? x : springX,
        y: reduceMotion ? y : springY,
      }}
    >
      <motion.div
        animate={{
          backgroundColor: hovering
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 1)",
          height: size,
          opacity: visible ? 1 : 0,
          scale: visible ? pressedScale : HIDDEN_SCALE,
          width: size,
        }}
        className="shrink-0 border-2 border-white"
        initial={false}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                damping: 28,
                // The native cursor is hidden the moment this one appears,
                // so fade in fast (easeOut is mostly opaque within a frame or
                // two) while the scale spring does the visible "pop" in.
                // Fade out a bit slower when the pointer leaves the window.
                opacity: visible
                  ? { duration: 0.1, ease: "easeOut" }
                  : { duration: 0.15 },
                stiffness: 400,
                type: "spring",
              }
        }
      />
    </motion.div>
  );
};

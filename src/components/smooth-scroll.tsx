"use client";

import { ReactLenis } from "lenis/react";
import type React from "react";

// Wheel/trackpad scrolling gets inertia; touch devices keep native scrolling
// (syncTouch is off by default) and `prefers-reduced-motion` disables
// smoothing entirely (respectReducedMotion is on by default).
export const SmoothScroll = ({ children }: { children: React.ReactNode }) => (
  <ReactLenis options={{ autoRaf: true, lerp: 0.1 }} root>
    {children}
  </ReactLenis>
);

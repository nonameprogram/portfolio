"use client";

import Image from "next/image";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { NumberKeyframeTrack } from "three/src/Three.Core.js";

export type LogoItem = {
  id?: string;
  logo: string | React.ReactNode;
  name?: string;
};

export type LogoColumnType = {
  id?: string;
  images: LogoItem[];
};

export type LogoTickerProps = {
  title?: React.ReactNode;
  columns: LogoColumnType[];
  interval?: number;
  className?: string;
};

const EXIT_MS = 300;
const WAVE_MS = 100;

const LogoColumn: React.FC<{
  images: LogoItem[];
  colIndex: number;
  tick: NumberKeyframeTrack;
}> = ({ images, colIndex, tick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "reset">("idle");

  const lastTickRef = useRef(-1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }
    if (tick === lastTickRef.current) {
      return;
    }

    lastTickRef.current = tick;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    cancelAnimationFrame(rafRef.current);
    timerRef.current = setTimeout(() => {
      setPhase("exit");
      timerRef.current = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length);
        setPhase("reset");

        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = requestAnimationFrame(() => {
            setPhase("idle");
          });
        });
      }, EXIT_MS);
    }, colIndex * WAVE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, [tick, images.length, colIndex]);

  const nextIdx = (currentIdx + 1) % images.length;
  const noTransition = phase === "reset";

  const base: React.CSSProperties = {
    transition: noTransition
      ? "none"
      : `transform ${EXIT_MS}ms ease-in-out, opacity ${EXIT_MS - 50}ms ease-in-out`,
  };

  const currentStyle: React.CSSProperties = {
    ...base,
    transform: phase === "exit" ? "translateY(-110%)" : "translateY(0)",
    opacity: phase === "exit" ? 0 : 1,
  };
  const nextStyle: React.CSSProperties = {
    ...base,
    transform: phase === "exit" ? "translateY(0)" : "translateY(110%)",
    opacity: phase === "exit" ? 1 : 0,
  };

  const currentLogo = images[currentIdx]?.logo;
  const nextLogo = images.length > 1 ? images[nextIdx]?.logo : null;

  return (
    <div className="relative flex h-20 min-w-0 flex-1 justify-center overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center px-5"
        style={currentStyle}
      >
        {currentLogo &&
          (typeof currentLogo === "string" ? (
            <Image
              alt={images[currentIdx]?.name || ""}
              className="max-h-8 max-w-full object-contain opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
              draggable={false}
              height={32}
              src={currentLogo}
              width={100}
            />
          ) : (
            currentLogo
          ))}
      </div>

      {nextLogo && (
        <div
          className="absolute inset-0 flex items-center justify-center px-5"
          style={nextStyle}
        >
          {typeof nextLogo === "string" ? (
            <Image
              alt={images[nextIdx]?.name || ""}
              className="max-h-8 max-w-full object-contain opacity-60 grayscale"
              draggable={false}
              height={32}
              src={nextLogo}
              width={100}
            />
          ) : (
            nextLogo
          )}
        </div>
      )}
    </div>
  );
};

export const LogoTicker: React.FC<LogoTickerProps> = ({
  title,
  columns,
  interval = 2500,
  className,
}) => {
  const cycleMs = Math.max(
    interval ?? 2500,
    EXIT_MS + (columns?.length || 0) * WAVE_MS + 200
  );
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), cycleMs);
    return () => clearInterval(id);
  }, [cycleMs]);

  if (!columns || columns.length === 0) {
    return null;
  }

  return (
    <div className={`container py-12 md:py-20 ${className || ""}`}>
      {title && (
        <p className="mb-8 font-medium text-muted-foreground text-xs uppercase tracking-[0.2em]">
          {title}
        </p>
      )}

      <div className="flex items-center">
        {columns.map((col, i) => (
          <LogoColumn
            colIndex={i}
            images={col.images || []}
            key={col.id || i}
            tick={tick}
          />
        ))}
      </div>
    </div>
  );
};

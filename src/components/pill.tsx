import React from "react";
import { cn } from "@/utils/cn";

export type PillContent = string | { icon: React.ReactNode; label: string };

export type PillProps = {
  content: PillContent;
  className?: string;
};

export const Pill = ({ content, className }: PillProps) => (
  <div
    className={cn(
      "bg-neutral-900 px-3 py-1 transition-colors duration-300 hover:bg-neutral-800",
      className
    )}
  >
    {typeof content === "string" ? (
      content
    ) : (
      <div className="flex items-center gap-2">
        {content.icon} {content.label}
      </div>
    )}
  </div>
);

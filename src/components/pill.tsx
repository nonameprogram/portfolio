import React from "react";

export type PillContent = string | { icon: React.ReactNode; label: string };

export type PillProps = {
  content: PillContent;
};

export const Pill = ({ content }: PillProps) => (
  <div className="bg-neutral-900 py-1 px-3 inter-400 hover:bg-neutral-800  transition-colors duration-300">
    {typeof content === "string" ? (
      content
    ) : (
      <div className="flex items-center gap-2">
        {content.icon} {content.label}
      </div>
    )}
  </div>
);

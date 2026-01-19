import { Pill, PillContent } from "@/components/pill";
import { cn } from "@/utils/cn";
import React from "react";

export type PillGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  items: PillContent[];
  pillClasses?: string;
  className?: string;
};

export const PillGroup = ({
  items,
  pillClasses,
  className,
  ...props
}: PillGroupProps) => {
  return (
    <div
      className={cn("mt-4 flex flex-wrap gap-2 text-sm", className)}
      {...props}
    >
      {items.sort().map((content, index) => (
        <Pill key={index} content={content} className={pillClasses} />
      ))}
    </div>
  );
};

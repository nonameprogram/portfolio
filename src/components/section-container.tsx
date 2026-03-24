import type React from "react";
import { cn } from "@/utils/cn";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({
  children,
  className,
  id,
}: SectionContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[2400px] px-6 md:px-24 lg:px-48",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

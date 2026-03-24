import { cn } from "@/utils/cn";
import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <div className={cn("px-6 md:px-24 lg:px-48 w-full max-w-[2400px] mx-auto", className)} id={id}>
      {children}
    </div>
  );
};

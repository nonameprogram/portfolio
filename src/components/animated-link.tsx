import React from "react";
import { cn } from "@/utils/cn";

export interface AnimatedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * @default true
   */
  shouldOpenInNewTab?: boolean;
}

export const AnimatedLink = ({
  children,
  className,
  shouldOpenInNewTab = true,
  ...props
}: AnimatedLinkProps) => (
  <a
    className={cn("flex items-center gap-2 animated-link", className)}
    {...(shouldOpenInNewTab
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {})}
    {...props}
  >
    {children}
  </a>
);

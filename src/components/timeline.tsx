import React from "react";
import { cn } from "@/utils/cn";

export interface TimelineProps extends React.OlHTMLAttributes<HTMLOListElement> {}

const Timeline = ({ children, className, ...props }: TimelineProps) => (
  <ol
    className={cn(
      "relative md:border-s border-neutral-200 dark:border-neutral-700 md:ml-3",
      className,
    )}
    {...props}
  >
    {children}
  </ol>
);

export interface TimelineEntryProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
}

const TimelineEntry = ({
  children,
  className,
  icon,
  ...props
}: TimelineEntryProps) => (
  <li
    className={cn(
      "group [&:not(:last-child)]:mb-10 md:ms-10 last-child:mb-0",
      className,
    )}
    {...props}
  >
    <div className="absolute md:flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-secondary-bg  ring-8 ring-secondary-bg hidden">
      <div className="w-full h-full bg-violet-600/20 [&>*]:!text-violet-300 flex items-center justify-center rounded-full">
        {!icon ? (
          <svg
            className="w-2.5 h-2.5 text-violet-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        ) : (
          icon
        )}
      </div>
    </div>
    {children}
  </li>
);

export interface TimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const TimelineTitle = ({
  children,
  className,
  ...props
}: TimelineTitleProps) => (
  <h3
    className={cn(
      "flex items-center mb-1 text-xl text-violet-100 lora-400",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

export interface TimelineSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineSubtitle = ({
  children,
  className,
  ...props
}: TimelineSubtitleProps) => (
  <div
    className={cn(
      "mb-2 text-base font-normal leading-none text-violet-300",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

const TimelineContent = ({
  children,
  className,
  ...props
}: TimelineContentProps) => (
  <div
    className={cn(
      "mb-4 text-sm font-normal text-neutral-300 group-last:mb-0",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export {
  Timeline,
  TimelineEntry,
  TimelineTitle,
  TimelineSubtitle,
  TimelineContent,
};

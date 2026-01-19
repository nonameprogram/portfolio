import React from "react";
import { cn } from "@/utils/cn";

const Timeline = ({ children }: { children: React.ReactNode }) => (
  <ol className="relative md:border-s border-neutral-200 dark:border-neutral-700 md:ml-3">
    {children}
  </ol>
);

const TimelineEntry = ({
  children,
  icon,
  ref,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLLIElement>;
}) => (
  <li
    className="group [&:not(:last-child)]:mb-10 md:ms-10 last-child:mb-0"
    ref={ref}
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

const TimelineTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="flex items-center mb-1 text-xl text-violet-100 lora-400">
    {children}
  </h3>
);

const TimelineSubtitle = ({ children }: { children: React.ReactNode }) => (
  <time className="block mb-2 text-base font-normal leading-none text-violet-300">
    {children}
  </time>
);

const TimelineContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "mb-4 text-sm font-normal text-neutral-300 group-last:mb-0",
      className,
    )}
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

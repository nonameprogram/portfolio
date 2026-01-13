import React from "react";

const Timeline = ({ children }: { children: React.ReactNode }) => (
  <ol className="relative border-s border-neutral-200 dark:border-neutral-700 ml-3">
    {children}
  </ol>
);

const TimelineEntry = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <li className="group [&:not(:last-child)]:mb-10 ms-10 last-child:mb-0">
    <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4 bg-neutral-300 ring-8 ring-neutral-950">
      {!icon ? (
        <svg
          className="w-2.5 h-2.5 text-neutral-900"
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
    </span>
    {children}
  </li>
);

const TimelineTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="flex items-center mb-1 text-2xl text-white lora-400">
    {children}
  </h3>
);

const TimelineSubtitle = ({ children }: { children: React.ReactNode }) => (
  <time className="block mb-2 text-base font-normal leading-none text-neutral-400">
    {children}
  </time>
);

const TimelineContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 text-base font-normal text-neutral-300 group-last:mb-0">
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

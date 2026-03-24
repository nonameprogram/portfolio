import Image from "next/image";

export const aboutMeEntries = [
  {
    icon: (
      <Image
        alt="Type-safe"
        className="size-16"
        height={64}
        src="/elipsis-intersect.svg"
        width={64}
      />
    ),
    title: "Structural Integrity",
    text: "Eliminating the gap between intent and execution. Automated type-safety that ensures consistency across every layer of the system.",
  },
  {
    icon: (
      <Image
        alt="Performance"
        className="size-16"
        height={64}
        src="/triangle.svg"
        width={64}
      />
    ),
    title: "Millisecond Precision",
    text: "Delivering speed where it matters most. Relentless optimization of the critical path to ensure lightning-fast interactions and industrial-grade efficiency.",
  },
  {
    icon: (
      <Image
        alt="Testing"
        className="size-16"
        height={64}
        src="/Intersect.svg"
        width={64}
      />
    ),
    title: "Bulletproof Logic",
    text: "Confidence built into every release. A high-coverage testing strategy that turns complex refactorings into routine updates without the fear of regressions.",
  },
  {
    icon: (
      <Image
        alt="Security"
        className="size-16"
        height={64}
        src="/Cub.svg"
        width={64}
      />
    ),
    title: "Fortified Core",
    text: "Defense as a first-class citizen. Implementing hardened authentication and proactive monitoring to protect your assets before threats even emerge.",
  },
];

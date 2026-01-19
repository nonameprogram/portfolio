import React from "react";
import { GraduationCapIcon } from "lucide-react";
import { BackpackIcon } from "@radix-ui/react-icons";

export type CareerEntry = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  achievements: string[];
  skills: string[];
  date: string;
  location: string;
};

export const careerEntries: CareerEntry[] = [
  {
    icon: <BackpackIcon className="size-3 text-neutral-950" />,
    title: "Full Stack Developer, Frontend Lead",
    subtitle: "Link-Point",
    achievements: [
      "Designed and implemented modular architectures for on-premise ERP and MES systems using a monorepo approach (e.g., Turborepo, Nx)",
      "Led a team of frontend developers, overseeing task distribution, code reviews, and technical decision-making",
      "Built user interfaces with React and TypeScript, creating responsive designs, adhering to accessibility standards (a11y), and enhancing user experience",
      "Developed and maintained backend services in PHP and Node.js, focusing on relational databases, data integrity, and event-driven architecture",
      "Enhanced existing systems to meet business and reliability requirements, emphasizing unit and end-to-end testing",
      "Integrated ERP and MES systems with industrial devices (PLC, OPC UA)",
      "Created and maintained internal technical documentation using OpenAPI and MDX, improving knowledge sharing and accelerating onboarding of new team members",
    ],
    skills: [
      "TypeScript",
      "React",
      "Laravel",
      "NestJS",
      "Node.js",
      "Redis",
      "MySQL",
      "Docker",
      "PHPUnit",
      "Vitest",
      "Slim",
    ],
    date: "Jan 2023 - Present",
    location: "Remote",
  },
  {
    icon: <BackpackIcon className="size-3 text-neutral-950" />,
    title: "Frontend Developer",
    subtitle: "Link-Point",
    achievements: [
      "Developed and maintained web applications using React, applying core concepts such as hooks, context, and component lifecycle\n",
      "Rewrote and refactored a legacy frontend codebase into TypeScript, significantly improving code quality, developer experience, and scalability",
      "Managed project tooling and configuration, including bundlers and build optimization",
      "Collaborated on backend-related tasks using Laravel and SQL, enabling efficient data handling and API integration",
    ],
    skills: ["TypeScript", "React", "MySQL", "Laravel", "Sass"],
    date: "Jan 2022 - Dec 2022",
    location: "Poland",
  },
  {
    icon: (
      <GraduationCapIcon className="size-4 text-neutral-950" strokeWidth={1} />
    ),
    title: "Information Technology and Computer Science",
    subtitle: "Technical College for Computer Science",
    achievements: [
      "Finalist of Polish Technical Innovation and Invention Olympiad in category didactic help (co-creator of educational web platform Live-Text for online learning and examing)",
    ],
    skills: ["JavaScript", "PHP", "C++", "MySQL", "WebSockets"],
    date: "2017 - 2021",
    location: "Poland",
  },
];

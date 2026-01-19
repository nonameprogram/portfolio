"use client";

import { motion } from "motion/react";
import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineEntry,
  TimelineSubtitle,
  TimelineTitle,
} from "@/components/timeline";
import "react-medium-image-zoom/dist/styles.css";
import { PillGroup } from "@/components/pill-group";
import {
  BackpackIcon,
  CalendarIcon,
  GraduationCapIcon,
  MapPinIcon,
  TrendingUpIcon,
} from "lucide-react";

export type Item = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  achievements: string[];
  skills: string[];
  date: string;
  location: string;
};

export const data: Item[] = [
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

export const CareerSection = () => {
  return (
    <div className="space-y-16">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="career"
      >
        <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap">
          <div>03</div>
          <div>/</div>
          <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
            Career Journey
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="inter-400">
            <Timeline>
              {data.map((item, index) => (
                <TimelineEntry icon={item.icon} key={index}>
                  <div className="hover:-translate-y-2 transition-all duration-300">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                    >
                      <div className="p-8 border rounded-2xl bg-[#111] border-[#222]">
                        <div className="flex gap-y-2 flex-col md:flex-row justify-between">
                          <div className="flex flex-col items-start justify-center">
                            <TimelineTitle>{item.title}</TimelineTitle>
                            <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                          </div>
                          <div className="flex flex-col gap-1 md:items-end text-sm">
                            <div className="flex gap-1 items-center">
                              <CalendarIcon className="size-4" />
                              <div>{item.date}</div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <MapPinIcon className="size-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                        <TimelineContent className="space-y-2">
                          <div className="flex text-violet-400 gap-x-1 items-center mt-3">
                            <TrendingUpIcon className="size-4" />
                            <span className="text-sm inter-500">
                              Key Achievements
                            </span>
                          </div>
                          {item.achievements.map((achievement, index) => (
                            <div key={index}>- {achievement}</div>
                          ))}
                          <PillGroup
                            items={item.skills}
                            pillClasses="bg-neutral-800 hover:bg-neutral-700"
                          />
                        </TimelineContent>
                      </div>
                    </motion.div>
                  </div>
                </TimelineEntry>
              ))}
            </Timeline>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

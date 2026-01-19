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
import { CalendarIcon, MapPinIcon, TrendingUpIcon } from "lucide-react";

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
              <TimelineEntry
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-neutral-950"
                  >
                    <path
                      d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
              >
                <div className="hover:-translate-y-2 transition-all duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    <div className="p-8 border rounded-2xl bg-[#111] border-[#222]">
                      <div className="flex gap-y-2 flex-col md:flex-row justify-between">
                        <div className="flex flex-col items-start justify-center">
                          <TimelineTitle>
                            Full Stack Developer, Frontend Lead
                          </TimelineTitle>
                          <TimelineSubtitle>Link-Point</TimelineSubtitle>
                        </div>
                        <div className="flex flex-col gap-1 md:items-end text-sm">
                          <div className="flex gap-1 items-center">
                            <CalendarIcon className="size-4" />
                            <div>Jan 2023 - Present</div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <MapPinIcon className="size-4" />
                            <span>Remote</span>
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
                        <div className="text-neutral-300">
                          - Designed and implemented modular architectures for
                          on-premise ERP and MES systems using a monorepo
                          approach (e.g., Turborepo, Nx)
                        </div>
                        <div className="text-neutral-300">
                          - Led a team of frontend developers, overseeing task
                          distribution, code reviews, and technical
                          decision-making
                        </div>
                        <div>
                          - Built user interfaces with React and TypeScript,
                          creating responsive designs, adhering to accessibility
                          standards (a11y), and enhancing user experience
                        </div>
                        <div className="text-neutral-300">
                          - Developed and maintained backend services in PHP and
                          Node.js, focusing on relational databases, data
                          integrity, and event-driven architecture
                        </div>
                        <div className="text-neutral-300">
                          - Enhanced existing systems to meet business and
                          reliability requirements, emphasizing unit and
                          end-to-end testing
                        </div>
                        <div className="text-neutral-300">
                          - Integrated ERP and MES systems with industrial
                          devices (PLC, OPC UA)
                        </div>
                        <div className="text-neutral-300">
                          - Created and maintained internal technical
                          documentation using OpenAPI and MDX, improving
                          knowledge sharing and accelerating onboarding of new
                          team members
                        </div>
                        <PillGroup
                          items={[
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
                          ]}
                          pillClasses="bg-neutral-800 hover:bg-neutral-700"
                        />
                      </TimelineContent>
                    </div>
                  </motion.div>
                </div>
              </TimelineEntry>
              <TimelineEntry
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-neutral-950"
                  >
                    <path
                      d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
              >
                <div className="hover:-translate-y-2 transition-all duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    <div className="p-8 border rounded-2xl bg-[#111] border-[#222]">
                      <div className="flex gap-y-2 flex-col md:flex-row justify-between">
                        <div className="flex flex-col items-start justify-center">
                          <TimelineTitle>Frontend Developer</TimelineTitle>
                          <TimelineSubtitle>Link-Point</TimelineSubtitle>
                        </div>
                        <div className="flex flex-col gap-1 md:items-end text-sm">
                          <div className="flex gap-1 items-center">
                            <CalendarIcon className="size-4" />
                            <div>Jan 2022 - Dec 2022</div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <MapPinIcon className="size-4" />
                            <span>Poland</span>
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
                        <div>
                          - Developed and maintained web applications using
                          React, applying core concepts such as hooks, context,
                          and component lifecycle
                        </div>
                        <div>
                          - Rewrote and refactored a legacy frontend codebase
                          into TypeScript, significantly improving code quality,
                          developer experience, and scalability
                        </div>
                        <div>
                          - Managed project tooling and configuration, including
                          bundlers and build optimization
                        </div>
                        <div>
                          - Collaborated on backend-related tasks using Laravel
                          and SQL, enabling efficient data handling and API
                          integration
                        </div>
                        <PillGroup
                          items={[
                            "TypeScript",
                            "React",
                            "MySQL",
                            "Laravel",
                            "Sass",
                          ]}
                          pillClasses="bg-neutral-800 hover:bg-neutral-700"
                        />
                      </TimelineContent>
                    </div>
                  </motion.div>
                </div>
              </TimelineEntry>
              <TimelineEntry
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 text-neutral-950"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                }
              >
                <div className="hover:-translate-y-2 transition-all duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    <div className="p-8 border rounded-2xl bg-[#111] border-[#222]">
                      <div className="flex gap-y-2 flex-col md:flex-row justify-between">
                        <div className="flex flex-col items-start justify-center">
                          <TimelineTitle>
                            Information Technology and Computer Science
                          </TimelineTitle>
                          <TimelineSubtitle>
                            Technical College for Computer Science
                          </TimelineSubtitle>
                        </div>
                        <div className="flex flex-col gap-1 md:items-end text-sm">
                          <div className="flex gap-1 items-center">
                            <CalendarIcon className="size-4" />
                            <div>2017 - 2021</div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <MapPinIcon className="size-4" />
                            <span>Poland</span>
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
                        <div className="text-neutral-300">
                          - Finalist of Polish Technical Innovation and
                          Invention Olympiad in category didactic help
                          (co-creator of educational web platform Live-Text for
                          online learning and examing)
                        </div>
                        <PillGroup
                          items={[
                            "JavaScript",
                            "PHP",
                            "C++",
                            "MySQL",
                            "WebSockets",
                          ]}
                          pillClasses="bg-neutral-800 hover:bg-neutral-700"
                        />
                      </TimelineContent>
                    </div>
                  </motion.div>
                </div>
              </TimelineEntry>
            </Timeline>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

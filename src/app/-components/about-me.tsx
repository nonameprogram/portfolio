"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineEntry,
  TimelineSubtitle,
  TimelineTitle,
} from "@/app/-components/timeline";
import { scrollToSectionHandler } from "@/app/-utils/scroll-to-section-handler";
import Image from "next/image";
import logo from "./shipment-tracking-diagram.svg";
import img2 from "../-assets/img.png";
import appImg1 from "../-assets/app/app1.png";
import appImg2 from "../-assets/app/app2.png";
import appImg3 from "../-assets/app/app3.png";
import { BrainIcon, ImageIcon } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  SiNodered,
  SiNoderedHex,
  SiReact,
  SiReactHex,
  SiRedux,
  SiReduxHex,
  SiLaravel,
  SiLaravelHex,
  SiNestjs,
  SiNestjsHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiExpress,
  SiExpressHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiVite,
  SiViteHex,
  SiRedis,
  SiRedisHex,
  SiMysql,
  SiMysqlHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiMongodb,
  SiMongodbHex,
  SiDocker,
  SiDockerHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiVitest,
  SiVitestHex,
  SiTestinglibrary,
  SiTestinglibraryHex,
  SiJest,
  SiJestHex,
  SiStorybook,
  SiStorybookHex,
  SiNextra,
  SiNextraHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiDrizzle,
  SiDrizzleHex,
  SiPrisma,
  SiPrismaHex,
  SiTurborepo,
  SiTurborepoHex,
  SiNx,
  SiNxHex,
  SiFastify,
  SiFastifyHex,
} from "@icons-pack/react-simple-icons";

const Pill = ({
  text,
}: {
  text: string | { icon: React.ReactNode; label: string };
}) => (
  <div className="bg-neutral-900 py-1 px-3 inter-400 hover:bg-neutral-800  transition-colors duration-300">
    {typeof text === "string" ? (
      text
    ) : (
      <div className="flex items-center gap-2">
        {text.icon} {text.label}
      </div>
    )}
  </div>
);

export default function AboutMe() {
  return (
    <div className="relative flex flex-col bg-secondary-bg rounded-t-4xl">
      <div className="container mx-auto px-12 pb-24 flex flex-col gap-16 relative grow !max-w-7xl">
        <div className="flex gap-x-4 relative">
          <div className="grid grid-cols-1 gap-24 relative">
            <div className="col-span-3 xl:col-span-2">
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  id="about-me"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center">
                    <div>01</div>
                    <div>/</div>
                    <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
                      About Me
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="inter-400 text-lg">
                      I’m a{" "}
                      <span className="underline decoration-dotted">
                        Software Developer
                      </span>{" "}
                      driven by a passion for creating secure, high-performance
                      solutions.
                    </div>
                    <div className="inter-400 text-lg">
                      The part I enjoy the most is building{" "}
                      <span className="underline decoration-dotted">tools</span>{" "}
                      that help other developers — making their work faster,
                      easier, and more enjoyable. I love finding ways to
                      streamline workflows, create reusable components, and
                      improve overall architecture.
                    </div>
                    <div className="inter-400 text-lg">
                      I always find opportunities to explore new technologies —
                      each one feels like an{" "}
                      <span className="underline decoration-dotted">
                        adventure
                      </span>{" "}
                      that fuels my curiosity and drives me to learn and
                      understand things on a deeper level.
                    </div>

                    <div className="inter-400 text-lg">
                      When I’m not coding, you’ll probably find me reading light
                      novels, experimenting in the kitchen, or exercising.
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-900 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="techstack"
                >
                  <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center">
                    <div>02</div>
                    <div>/</div>
                    <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
                      TechStack
                    </div>
                  </div>
                  <div className="text-center">
                    The tools and technologies I use to design, deploy, and
                    operate infrastructure at work.
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">Frontend</div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              {
                                icon: (
                                  <SiVite
                                    color={SiViteHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Vite",
                              },
                              {
                                icon: (
                                  <SiReact
                                    color={SiReactHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "React",
                              },
                              "TanStack Start",
                              {
                                icon: (
                                  <SiNextdotjs
                                    color={SiNextdotjsHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Next.js",
                              },
                              {
                                icon: (
                                  <SiRedux
                                    color={SiReduxHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Redux Toolkit",
                              },
                              {
                                icon: (
                                  <SiTurborepo
                                    color={SiTurborepoHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Turborepo",
                              },
                              {
                                icon: (
                                  <SiNx
                                    color={SiNxHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Nx",
                              },
                              "Zustand",
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">UI / Styling</div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              {
                                icon: (
                                  <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-3 fill-[white]"
                                  >
                                    <title>Sass</title>
                                    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z" />
                                  </svg>
                                ),
                                label: "Saas",
                              },
                              {
                                icon: (
                                  <SiTailwindcss
                                    color={SiTailwindcssHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "TailwindCSS",
                              },
                              "Framer Motion",
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">
                            Form / Validation
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              "TanStack Form",
                              "React Hook Form",
                              "Formik",
                              "Zod",
                              "ArkType",
                              "Yup",
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*<div className="border border-neutral-700 shadow-md shadow-violet-900/50 p-4">*/}
                    {/*  <div className="text-sm inter-500">Form / Validation</div>*/}
                    {/*  <div className="flex flex-wrap gap-2 text-sm mt-4">*/}
                    {/*    {[*/}
                    {/*      "TanStack Form",*/}
                    {/*      "React Hook Form",*/}
                    {/*      "Formik",*/}
                    {/*      "Zod",*/}
                    {/*      "ArkType",*/}
                    {/*      "Yup",*/}
                    {/*    ].map((tech, index) => (*/}
                    {/*      <Pill key={index} text={tech} />*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">Backend</div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              {
                                icon: (
                                  <SiNodedotjs
                                    color={SiNodedotjsHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Node.js",
                              },
                              {
                                icon: (
                                  <SiExpress
                                    color={SiExpressHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Express",
                              },
                              {
                                icon: (
                                  <SiNestjs
                                    color={SiNestjsHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "NestJS",
                              },
                              {
                                icon: (
                                  <SiFastify
                                    color={SiFastifyHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Fastify",
                              },
                              {
                                icon: (
                                  <SiNodered
                                    color={SiNoderedHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Node-RED",
                              },
                              {
                                icon: (
                                  <SiLaravel
                                    color={SiLaravelHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Laravel",
                              },
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">
                            Testing / Documentation
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              {
                                icon: (
                                  <SiJest
                                    color={SiJestHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Jest",
                              },
                              {
                                icon: (
                                  <SiVitest
                                    color={SiVitestHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Vitest",
                              },
                              {
                                icon: (
                                  <SiTestinglibrary
                                    color={SiTestinglibraryHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "React Testing Library",
                              },
                              "Playwright",
                              "PHPUnit",
                              {
                                icon: (
                                  <SiNextra
                                    color={SiNextraHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Nextra",
                              },
                              {
                                icon: (
                                  <SiStorybook
                                    color={SiStorybookHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Storybook",
                              },
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">
                            Databases / ORM
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              {
                                icon: (
                                  <SiMysql
                                    color={SiMysqlHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "MySQL",
                              },
                              {
                                icon: (
                                  <SiPostgresql
                                    color={SiPostgresqlHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "PostgreSQL",
                              },
                              {
                                icon: (
                                  <SiMongodb
                                    color={SiMongodbHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "MongoDB",
                              },
                              {
                                icon: (
                                  <SiRedis
                                    color={SiRedisHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Redis",
                              },
                              {
                                icon: (
                                  <SiDrizzle
                                    color={SiDrizzleHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Drizzle",
                              },
                              {
                                icon: (
                                  <SiPrisma
                                    color={SiPrismaHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Prisma",
                              },
                              {
                                icon: (
                                  <SiLaravel
                                    color={SiLaravelHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Eloquent",
                              },
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-4 pt-4 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full" />
                        <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                          <div className="text-sm inter-500">
                            Containers & CI/CD
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm mt-4">
                            {[
                              {
                                icon: (
                                  <SiDocker
                                    color={SiDockerHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Docker",
                              },
                              {
                                icon: (
                                  <SiGithubactions
                                    color={SiGithubactionsHex}
                                    className="size-3 !text-white !fill-violet-300"
                                  />
                                ),
                                label: "Github Actions",
                              },
                            ].map((tech, index) => (
                              <Pill key={index} text={tech} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-900 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="experience"
                >
                  <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center">
                    <div>03</div>
                    <div>/</div>
                    <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
                      Experience
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
                          <TimelineTitle>
                            Full-Stack Developer, Frontend Lead
                          </TimelineTitle>
                          <TimelineSubtitle>
                            Link-Point, Jan 2022 - Present
                          </TimelineSubtitle>
                          <TimelineContent>
                            <div className="text-neutral-300 mt-4">
                              - Designed and implemented modular architectures
                              for on-premise ERP and MES systems
                            </div>
                            <div className="text-neutral-300">
                              - Developed and maintained backend services in PHP
                              and Node.js (databases, data integrity,
                              event-driven architecture)
                            </div>
                            <div className="text-neutral-300">
                              - Maintained and evolved existing systems to meet
                              business and reliability requirements
                            </div>
                            <div className="text-neutral-300">
                              - Integrated external systems and devices,
                              collaborated directly with clients
                            </div>
                            <div className="text-neutral-300">
                              - Created and maintained internal technical
                              documentation
                            </div>
                            <div className="flex mt-4 gap-2 text-sm flex-wrap">
                              {[
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
                              ]
                                .sort()
                                .map((tech, index) => (
                                  <Pill key={index} text={tech} />
                                ))}
                            </div>
                          </TimelineContent>
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
                          <TimelineTitle>
                            Technical College for Computer Science
                          </TimelineTitle>
                          <TimelineSubtitle>2017 - 2021</TimelineSubtitle>
                          <TimelineContent>
                            <div className="text-neutral-300 mt-4">
                              - Laureate of Polish Technical Innovation and
                              Invention Olympiad in category didactic help
                              (co-creator of educational web platform Live-Text
                              for online learning and examing).
                            </div>
                            <div className="flex mt-4 gap-2 text-sm flex-wrap">
                              {[
                                "JavaScript",
                                "PHP",
                                "C++",
                                "MySQL",
                                "WebSockets",
                              ]
                                .sort()
                                .map((tech, index) => (
                                  <Pill key={index} text={tech} />
                                ))}
                            </div>
                          </TimelineContent>
                        </TimelineEntry>
                      </Timeline>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-900 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="experience"
                >
                  <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center">
                    <div>04</div>
                    <div>/</div>
                    <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
                      Projects
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="lora-400">
                      <div className="flex flex-col gap-2 sm:flex-row justify-between">
                        <div className="text-2xl">WebSocketKit</div>
                        <div className="flex flex-wrap gap-2">
                          <a
                            href="https://www.npmjs.com/package/websocketkit"
                            className="flex items-center gap-2 hover:underline"
                          >
                            View on npm{" "}
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="https://github.com/nonameprogram/wskit"
                            className="flex items-center gap-2 hover:underline"
                          >
                            View on GitHub{" "}
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="https://wskit.bkosinski.dev"
                            className="flex items-center gap-2 hover:underline"
                          >
                            View documentation{" "}
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="mt-2 flex gap-2 text-sm flex-wrap">
                        {["TypeScript", "Pusher", "Vitest"]
                          .sort()
                          .map((tech, index) => (
                            <Pill key={index} text={tech} />
                          ))}
                      </div>
                      <div className="mt-6 inter-400">
                        The project addresses limitations of the official app,
                        which provides only vague shipment statuses. Using
                        Poland Post's public SOAP API, it automates tracking and
                        sends email notifications for updates.
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-neutral-900 w-1/2" />
                  <div className="flex flex-col gap-y-8">
                    <div className="lora-400">
                      <div className="text-2xl">Shipment Tracking</div>
                      <div className="mt-2 flex gap-2 text-sm flex-wrap">
                        {[
                          "TypeScript",
                          "NestJS",
                          "TanStack Start",
                          "SOAP",
                          "React",
                        ]
                          .sort()
                          .map((tech, index) => (
                            <Pill key={index} text={tech} />
                          ))}
                      </div>
                      <div className="inter-400 mt-6">
                        Vague shipment statuses from the official app are
                        resolved by automating tracking via Poland Post's public
                        SOAP API, with email notifications for each update.
                      </div>
                      <div className="flex flex-wrap mt-4 gap-4">
                        <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                          <Zoom>
                            <div className="relative h-20">
                              <Image
                                src={logo}
                                className="opacity-50 object-fill h-full w-full"
                                alt="process-diagram"
                              />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              <ImageIcon />
                            </div>
                          </Zoom>
                        </div>
                        <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                          <Zoom>
                            <div className="relative h-20">
                              <Image
                                src={img2}
                                className="opacity-50 object-fill h-full w-full"
                                alt="app"
                              />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              <ImageIcon />
                            </div>
                          </Zoom>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-neutral-900 w-1/2" />
                  <div className="flex flex-col gap-y-8">
                    <div className="lora-400">
                      <div className="text-2xl">Book Collections</div>
                      <div className="mt-2 flex gap-2 text-sm flex-wrap">
                        {[
                          "TypeScript",
                          "NestJS",
                          "Fastify",
                          "GraphQL",
                          "Mercurius",
                          "React",
                          "Redis",
                          "Kafka",
                          "ClickHouse",
                          "PostgreSQL",
                          "Docker",
                          "TanStack Start",
                          "ArkType",
                        ]
                          .sort()
                          .map((tech, index) => (
                            <Pill key={index} text={tech} />
                          ))}
                      </div>
                      <div className="inter-400 mt-6">
                        To address duplicate book orders and incomplete entries
                        on platforms like Goodreads, a personal library
                        management system tracks the entire collection,
                        including multilingual titles, and efficiently manages
                        reading history.
                      </div>
                      <div className="flex flex-wrap mt-4 gap-4">
                        <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                          <Zoom>
                            <div className="relative h-20">
                              <Image
                                src={appImg2}
                                className="opacity-50 object-fill h-full w-full"
                                alt="process-diagram"
                              />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              <ImageIcon />
                            </div>
                          </Zoom>
                        </div>
                        <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                          <Zoom>
                            <div className="relative h-20">
                              <Image
                                src={appImg1}
                                className="opacity-50 object-fill h-full w-full"
                                alt="app"
                              />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              <ImageIcon />
                            </div>
                          </Zoom>
                        </div>
                        <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                          <Zoom>
                            <div className="relative h-20">
                              <Image
                                src={appImg3}
                                className="opacity-50 object-fill h-full w-full"
                                alt="app"
                              />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              <ImageIcon />
                            </div>
                          </Zoom>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-900 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="contact"
                >
                  <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center">
                    <div>05</div>
                    <div>/</div>
                    <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
                      Contact
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      className="flex items-center gap-2 hover:underline"
                      href="mailto:contact@bkosinski.dev"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      contact@bkosinski.dev
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Find me on LinkedIn
                    </a>
                    <a
                      href="https://github.com/nonameprogram"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Find me on GitHub (personal)
                    </a>
                    <a
                      href="https://github.com/whatisphp"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Find me on GitHub (work)
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

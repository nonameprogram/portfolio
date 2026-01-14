"use client";

import { motion } from "motion/react";
import React from "react";
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
  SiReacthookform,
  SiReacthookformHex,
  SiFormik,
  SiFormikHex,
  SiZod,
  SiZodHex,
} from "@icons-pack/react-simple-icons";
import { Pill } from "@/components/pill";
import { SpotlightCard } from "@/components/spotlight-card";

export const TechStackSection = () => {
  return (
    <div className="space-y-16">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="techstack"
      >
        <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap">
          <div>02</div>
          <div>/</div>
          <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
            TechStack
          </div>
        </div>
        <div className="text-center inter-400">
          The tools and technologies I use to design, deploy, and operate
          infrastructure at work.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
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
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300 overflow-hidden" />
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
                          className="size-3 fill-violet-300"
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
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
              <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                <div className="text-sm inter-500">Form / Validation</div>
                <div className="flex flex-wrap gap-2 text-sm mt-4">
                  {[
                    "TanStack Form",
                    {
                      icon: (
                        <SiReacthookform
                          color={SiReacthookformHex}
                          className="size-3 !text-white !fill-violet-300"
                        />
                      ),
                      label: "React Hook Form",
                    },
                    {
                      icon: (
                        <SiFormik
                          color={SiFormikHex}
                          className="size-3 !text-white !fill-violet-300"
                        />
                      ),
                      label: "Formik",
                    },
                    {
                      icon: (
                        <SiZod
                          color={SiZodHex}
                          className="size-3 !text-white !fill-violet-300"
                        />
                      ),
                      label: "Zod",
                    },
                    "ArkType",
                    "Yup",
                  ].map((tech, index) => (
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
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
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
              <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                <div className="text-sm inter-500">Testing / Documentation</div>
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
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
              <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                <div className="text-sm inter-500">Databases / ORM</div>
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
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="pr-4 pt-4 w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute -top-4 -right-4 bg-neutral-900 w-full h-full group-hover:bg-violet-900 transition-colors duration-300" />
              <div className="border border-neutral-700 bg-secondary-bg p-4 z-10 relative  w-full h-full">
                <div className="text-sm inter-500">Containers & CI/CD</div>
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
                    <Pill key={index} content={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

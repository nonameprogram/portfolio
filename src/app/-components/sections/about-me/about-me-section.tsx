"use client";

import React from "react";
import { motion } from "motion/react";
import { Tooltip } from "@/components/tooltip";
import { SpotlightCard } from "@/components/spotlight-card";
import { aboutMeEntries } from "@/app/-components/sections/about-me/constants";

const gridVariants = {
  inactive: {},
  active: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const AboutMeSection = () => {
  return (
    <React.Fragment>
      <div className="space-y-16">
        <motion.div
          className="flex flex-col py-16"
          id="about-me"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8 flex items-center justify-center">
            <div className="inter-500 rounded-full border border-violet-950 bg-violet-950/50 px-3 py-2 text-sm text-violet-300">
              4+ Years of Experience
            </div>
          </div>
          <div className="lora-400 mb-16 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl">
            <div>01</div>
            <div>/</div>
            <div className="bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text whitespace-nowrap text-transparent">
              About Me
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="inter-400 text-base">
              I build applications from the ground up — from concept to
              real-world solutions, always with a{" "}
              <Tooltip
                content={
                  <span className="inter-400">Only AI could say that.</span>
                }
              >
                <span className="rounded bg-violet-950/50 px-1.5 text-violet-200 underline decoration-dotted">
                  human
                </span>
              </Tooltip>{" "}
              touch.
            </div>
            <div className="inter-400 text-base">
              Specializing in full-stack development with a focus on frontend
              architecture, including monorepos, micro-frontends, module
              federation, and monolithic applications. Among the projects I’ve
              delivered, one extended the core product through multiple modular
              solutions, helping the team scale efficiently and maintain
              high-quality code.
            </div>
            <div className="inter-400 text-base">
              I also had the chance to lead a frontend team, an experience I’m
              grateful for, where I made strategic decisions, guided
              architectural direction, and fostered collaboration across complex
              projects.
            </div>
            <div className="inter-400 text-base">
              To me, good engineering isn’t about chasing the newest tools, but
              about choosing the right tools for the right problems — and
              understanding them deeply enough to use them with confidence. I
              also value collaboration and{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    Regularly sharing knowledge and experiences during daily
                    standups.
                  </span>
                }
              >
                <span className="rounded bg-violet-950/50 px-1.5 text-violet-200 underline decoration-dotted">
                  knowledge sharing
                </span>
              </Tooltip>
              , believing that the best solutions often come from teamwork and
              open communication.
            </div>
            <div className="inter-400 text-base">
              In my free time, I explore new{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    Recently, I discovered the real magic of combining .NET
                    Framework with Hot Chocolate GraphQL to dramatically speed
                    up development.
                  </span>
                }
              >
                <span className="rounded bg-violet-950/50 px-1.5 text-violet-200 underline decoration-dotted">
                  technologies
                </span>
              </Tooltip>{" "}
              that broaden my knowledge, and when I’m not coding, you’ll
              probably find me reading{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    Always engaging, they boost{" "}
                    <span className="inter-600">creativity</span>. My favorites
                    have to be fantasy and sci-fi.
                  </span>
                }
              >
                <span className="rounded bg-violet-950/50 px-1.5 text-violet-200 underline decoration-dotted">
                  light novels
                </span>
              </Tooltip>
              , experimenting in the{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    I’ve probably lied — the only things I actually cook are
                    spaghetti, tortillas, and hamburgers.
                  </span>
                }
              >
                <span className="rounded bg-violet-950/50 px-1.5 text-violet-200 underline decoration-dotted">
                  kitchen
                </span>
              </Tooltip>
              , exercising, or spending time with my dog.
            </div>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate="active"
          >
            {aboutMeEntries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "tween", delay: 0.15 * i }}
              >
                <SpotlightCard
                  spotlightColor="rgba(194, 122, 255, 0.2)"
                  className="flex h-full w-full flex-col gap-4 lg:flex-row"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded bg-violet-600/20">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="inter-500">{item.title}</div>
                    <div className="inter-400 text-sm">{item.text}</div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

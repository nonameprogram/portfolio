"use client";

import { motion } from "motion/react";
import { aboutMeEntries } from "@/app/-components/sections/about-me/constants";
import { SpotlightCard } from "@/components/spotlight-card";
import { Tooltip } from "@/components/tooltip";

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
    <div className="space-y-16">
      <motion.div
        className="flex flex-col py-16"
        id="about-me"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8 flex items-center justify-center">
          <div className="inter-500 rounded-full border border-violet-950 bg-violet-950/50 px-3 py-2 text-sm text-violet-300">
            4+ Years of Experience
          </div>
        </div>
        <div className="lora-400 mb-16 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl">
          <div>01</div>
          <div>/</div>
          <div className="whitespace-nowrap bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text text-transparent">
            About Me
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="inter-400 text-base">
            I build applications from the ground up, always with a{" "}
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
            federation, and monolithic applications.
          </div>
          <div className="inter-400 text-base">
            Led a frontend team, guiding architectural decisions, code quality,
            and collaboration across complex projects.
          </div>
          <div className="inter-400 text-base">
            To me, good engineering isn’t about chasing the newest tools, but
            about choosing the right tools for the right problems — and
            understanding them deeply enough to use them with confidence.
          </div>
          <div className="inter-400 text-base">
            I also value collaboration and{" "}
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
                  Framework with Hot Chocolate GraphQL to dramatically speed up
                  development.
                </span>
              }
            >
              <span className="rounded bg-violet-950/50 px-1.5 text-violet-200 underline decoration-dotted">
                technologies
              </span>
            </Tooltip>{" "}
            that broaden my knowledge, and when I’m not coding, you’ll probably
            find me reading{" "}
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
          animate="active"
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
          initial="hidden"
          variants={gridVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {aboutMeEntries.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              key={i}
              transition={{ type: "tween", delay: 0.15 * i }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SpotlightCard
                className="flex h-full w-full flex-col gap-4 lg:flex-row"
                spotlightColor="rgba(194, 122, 255, 0.2)"
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
  );
};

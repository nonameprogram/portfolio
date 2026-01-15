"use client";

import React from "react";
import { motion } from "motion/react";
import "react-medium-image-zoom/dist/styles.css";
import { Tooltip } from "@/components/tooltip";
import { RocketIcon } from "@radix-ui/react-icons";
import { FlaskConicalIcon, ShieldIcon } from "lucide-react";
import { SiTypescript } from "@icons-pack/react-simple-icons";
import { SpotlightCard } from "@/components/spotlight-card";

const gridVariants = {
  inactive: {},
  active: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  inactive: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  active: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
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
          <div className="flex items-center justify-center mb-8">
            <div className="text-sm inter-500 border py-2 px-3 rounded-full bg-violet-950/50 text-violet-300 border-violet-950">
              4+ Years of Experience
            </div>
          </div>
          <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap mb-16">
            <div>01</div>
            <div>/</div>
            <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
              About Me
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="inter-400 text-base">
              I’m on a journey to reach a new level, building things that are
              fast, secure, and enjoyable to work with.
            </div>{" "}
            <div className="inter-400 text-base">
              That mindset naturally leads me to creating tools that help
              developers move faster and work more efficiently — from reusable
              components to cleaner, more{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    Removing duplication and sharing types across API and web
                    applications.
                  </span>
                }
              >
                <span className="underline decoration-dotted text-violet-200">
                  maintainable architectures
                </span>
              </Tooltip>
              .
            </div>
            <div className="inter-400 text-base">
              Curiosity drives me to explore new{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    Recently i had fun with{" "}
                    <span className="inter-600">.NET Framework</span> and{" "}
                    <span className="inter-600">Hot Chocolate GraphQL</span>.
                  </span>
                }
              >
                <span className="underline decoration-dotted text-violet-200">
                  technologies
                </span>
              </Tooltip>{" "}
              and understand them on a deeper level.
            </div>
            <div className="inter-400 text-base">
              To me, good engineering isn’t about chasing the newest tools, but
              about choosing the right tools for the right problems — and
              understanding them deeply enough to use them with confidence.
            </div>
            <div className="inter-400 text-base">
              When I’m not coding, you’ll probably find me reading{" "}
              <Tooltip
                content={
                  <span className="inter-400">
                    Always engaging, they boost{" "}
                    <span className="inter-600">creativity</span>. My favorites
                    have to be fantasy and sci-fi.
                  </span>
                }
              >
                <span className="underline decoration-dotted text-violet-200">
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
                <span className="underline decoration-dotted text-violet-200">
                  kitchen
                </span>
              </Tooltip>
              , or exercising.
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate="active"
          >
            {[
              {
                icon: <SiTypescript className="fill-violet-300 size-6" />,
                title: "Type-safe approach",
                text: "Seamlessly bringing API types into the web environment with OpenAPI, monorepos, and automated code generation, regardless of the programming language or framework.",
              },
              {
                icon: <RocketIcon className="text-violet-300 size-6" />,
                title: "Performance",
                text: "Optimizing build and test times by picking right tools, caching and making sure code-splitting is effective. Continuously tracking and eliminating latency and performance bottlenecks in applications.",
              },
              {
                icon: <FlaskConicalIcon className="text-violet-300 size-6" />,
                title: "Testing & Quality",
                text: "Ensuring high code quality through unit, integration, and end-to-end testing. Catching issues early and maintaining confidence when refactoring or shipping new features.",
              },
              {
                icon: <ShieldIcon className="text-violet-300 size-6" />,
                title: "Security",
                text: "Applying modern security standards and best practices, including secure authentication flows, proper data validation, monitoring including OpenTelemetry and safe API communication.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "tween", delay: 0.15 * i }}
              >
                <SpotlightCard
                  spotlightColor="rgba(194, 122, 255, 0.2)"
                  className="flex flex-col lg:flex-row gap-4 w-full h-full"
                >
                  <div className="bg-violet-600/20 size-12 rounded shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex gap-y-2 flex-col">
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

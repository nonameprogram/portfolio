"use client";

import React from "react";
import { motion } from "motion/react";
import "react-medium-image-zoom/dist/styles.css";
import { Tooltip } from "@/components/tooltip";
import { ChatBubbleIcon, RocketIcon } from "@radix-ui/react-icons";
import { BikeIcon, FlaskConicalIcon, ShieldIcon } from "lucide-react";
import { SiTypescript } from "@icons-pack/react-simple-icons";

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
          <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center mb-16">
            <div>01</div>
            <div>/</div>
            <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
              About Me
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="inter-400 text-base">
              I’m on a journey to reach the highest level possible, building
              things that are fast, secure, and enjoyable to work with.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="border border-neutral-800 rounded p-6 flex gap-4">
              <div className="bg-violet-400/20 size-12 rounded-md shrink-0 flex items-center justify-center">
                <SiTypescript className="fill-violet-300 size-6" />
              </div>
              <div className="flex gap-y-2 flex-col">
                <div className="inter-500">Type-safe approach</div>
                <div className="inter-400 text-sm">
                  Seamlessly bringing API types into the web environment with
                  OpenAPI, monorepos, and automated code generation — ensuring
                  reliability and reducing runtime errors, regardless of the
                  programming language or framework.
                </div>
              </div>
            </div>
            <div className="border border-neutral-800 rounded p-6 flex gap-4">
              <div className="bg-violet-500/20 size-12 rounded shrink-0 flex items-center justify-center">
                <RocketIcon className="text-violet-300 size-6" />
              </div>
              <div className="flex gap-y-2 flex-col">
                <div className="inter-500">Performance</div>
                <div className="inter-400 text-sm">
                  Optimizing build and test times by picking right tools,
                  caching and making sure code-splitting is effective.
                  Continuously tracking and eliminating latency and performance
                  bottlenecks in applications.
                </div>
              </div>
            </div>
            <div className="border border-neutral-800 rounded p-6 flex gap-4">
              <div className="bg-violet-600/20 size-12 rounded shrink-0 flex items-center justify-center">
                <FlaskConicalIcon className="text-violet-300 size-6" />
              </div>
              <div className="flex gap-y-2 flex-col">
                <div className="inter-500">Testing & Quality</div>
                <div className="inter-400 text-sm">
                  Ensuring high code quality through unit, integration, and
                  end-to-end testing. Catching issues early and maintaining
                  confidence when refactoring or shipping new features — and
                  sleeping well at night.
                </div>
              </div>
            </div>
            <div className="border border-neutral-800 rounded p-6 flex gap-4">
              <div className="bg-violet-700/20 size-12 rounded shrink-0 flex items-center justify-center">
                <ShieldIcon className="text-violet-300 size-6" />
              </div>
              <div className="flex gap-y-2 flex-col">
                <div className="inter-500">Security</div>
                <div className="inter-400 text-sm">
                  Applying modern security standards and best practices,
                  including secure authentication flows, proper data validation,
                  and safe API communication — without compromising performance
                  or speed.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

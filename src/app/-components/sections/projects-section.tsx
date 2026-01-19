"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import shipmentTrackingDiagram from "../../-assets/shipment-tracking-diagram.svg";
import shipmentHistoryImage from "../../-assets/shipment-tracking-app-shipment-history.png";
import appCreateWorkImage from "../../-assets/app/app-create-work.png";
import appBookPreviewImage from "../../-assets/app/app-book-preview.png";
import appUpdateBookImage from "../../-assets/app/app-update-book.png";
import appPersonalSite from "../../-assets/app/app-personal-site.png";
import { ImageIcon } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Pill } from "@/components/pill";
import { PillGroup } from "@/components/pill-group";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { AnimatedLink } from "@/components/animated-link";

export const ProjectsSection = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col gap-16 py-16" id="projects">
        <motion.div
          className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <div>04</div>
          <div>/</div>
          <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
            Projects
          </div>
        </motion.div>
        <div className="flex flex-col gap-y-24">
          <motion.div
            className="flex flex-col md:flex-row-reverse gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="pr-4 pt-4 relative w-full md:w-1/2 shrink-0">
              <div className="relative w-full h-full">
                <AspectRatio ratio={576 / 449}>
                  <Image
                    src={shipmentHistoryImage}
                    fill
                    className="rounded-2xl z-20 relative shadow-sm object-cover"
                    alt="process-diagram"
                  />
                </AspectRatio>
                <div className="absolute -top-4 -right-4 w-full h-full bg-white/90 rounded-2xl z-10" />
              </div>
            </div>
            <div className="lora-400">
              <div className="text-2xl">Shipment Tracking</div>
              <div className="inter-400 mt-6">
                Vague shipment statuses from the official app are resolved by
                automating tracking via Poland Post&apos;s public SOAP API, with
                email notifications for each update.
              </div>
              <div className="flex flex-wrap mt-6 gap-4">
                <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        src={shipmentTrackingDiagram}
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
                        src={shipmentHistoryImage}
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
              <PillGroup
                className="mt-6"
                items={[
                  "TypeScript",
                  "NestJS",
                  "TanStack Start",
                  "SOAP",
                  "React",
                ]}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="pr-4 pt-4 relative w-full md:w-1/2 shrink-0">
              <div className="relative w-full h-full">
                <AspectRatio ratio={576 / 449}>
                  <Image
                    src={appBookPreviewImage}
                    className="rounded-2xl z-20 relative shadow-sm"
                    alt="process-diagram"
                  />
                </AspectRatio>
                <div className="absolute -top-4 -right-4 w-full h-full bg-[#b5b0a8] rounded-2xl z-10" />
              </div>
            </div>
            <div className="lora-400">
              <div className="text-2xl">Book Collections</div>
              <div className="inter-400 mt-6">
                To address duplicate book orders and incomplete entries on
                platforms like Goodreads, a personal library management system
                tracks the entire collection, including multilingual titles, and
                efficiently manages reading history.
              </div>
              <div className="flex flex-wrap mt-4 gap-4 mt-6">
                <div className="p-1 border-2 border-neutral-700 rounded-md relative overflow-hidden group hover:border-neutral-300 transition-colors duration-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        src={appBookPreviewImage}
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
                        src={appCreateWorkImage}
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
                        src={appUpdateBookImage}
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
              <PillGroup
                className="mt-6"
                items={[
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
                ]}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row-reverse gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="pr-4 pt-4 relative w-full md:w-1/2 shrink-0">
              <div className="relative w-full h-full">
                <AspectRatio ratio={576 / 449}>
                  <Image
                    src={appPersonalSite}
                    fill
                    className="rounded-2xl z-20 relative shadow-sm shadow-neutral-900 border border-neutral-900/50 object-cover"
                    alt="process-diagram"
                  />
                </AspectRatio>
                <div className="absolute -top-4 -right-4 w-full h-full bg-neutral-950/90 rounded-2xl z-10" />
              </div>
            </div>
            <div className="lora-400">
              <div className="flex flex-col gap-2 sm:flex-row justify-between">
                <div className="text-2xl">Portfolio</div>
              </div>
              <PillGroup
                items={["Next.js", "Motion", "React", "TailwindCSS"]}
              />
              <div className="inter-400 mt-6">
                A personal portfolio built with Next.js and React to showcase
                projects and experience. It features smooth animations with
                Motion and a clean, responsive design.
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <AnimatedLink href="https://github.com/nonameprogram/portfolio">
                  <SiGithub className="size-4" />
                  <span>View on GitHub</span>
                  <ExternalLinkIcon />
                </AnimatedLink>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="lora-400">
              <div className="flex flex-col gap-2 sm:flex-row justify-between">
                <div className="text-2xl">WebSocketKit</div>
              </div>
              <div className="mt-6 inter-400">
                Issues with missing type definitions and unstable real-time
                listeners in the provided SDK are resolved by introducing a
                type-safe abstraction that centrally manages listener
                lifecycles, ensuring unsubscribe is triggered only when no
                active listeners remain.
              </div>
              <div className="mt-6 flex gap-2 text-sm flex-wrap">
                {["TypeScript", "Pusher", "Vitest"]
                  .sort()
                  .map((tech, index) => (
                    <Pill key={index} content={tech} />
                  ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <AnimatedLink href="https://www.npmjs.com/package/websocketkit">
                  <SiNpm className="size-4" />
                  <span>View on npm</span>
                  <ExternalLinkIcon />
                </AnimatedLink>
                <AnimatedLink href="https://github.com/nonameprogram/wskit">
                  <SiGithub className="size-4" />
                  <span>View on GitHub</span>
                  <ExternalLinkIcon />
                </AnimatedLink>
                <AnimatedLink href="https://wskit.bkosinski.dev">
                  <span>View documentation</span>
                  <ExternalLinkIcon />
                </AnimatedLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

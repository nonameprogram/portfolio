"use client";

import { ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import appBookPreviewImage from "../../-assets/app/app-book-preview.png";
import appCreateWorkImage from "../../-assets/app/app-create-work.png";
import appPersonalSite from "../../-assets/app/app-personal-site.png";
import appUpdateBookImage from "../../-assets/app/app-update-book.png";
import shipmentHistoryImage from "../../-assets/shipment-tracking-app-shipment-history.png";
import shipmentTrackingDiagram from "../../-assets/shipment-tracking-diagram.svg";
import "react-medium-image-zoom/dist/styles.css";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { AnimatedLink } from "@/components/animated-link";
import { Pill } from "@/components/pill";
import { PillGroup } from "@/components/pill-group";

export const ProjectsSection = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col gap-16 py-16" id="projects">
        <motion.div
          className="lora-400 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>04</div>
          <div>/</div>
          <div className="whitespace-nowrap bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text text-transparent">
            Projects
          </div>
        </motion.div>
        <div className="flex flex-col gap-y-24">
          <motion.div
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative w-full shrink-0 pt-4 pr-4 md:w-1/2">
              <div className="relative h-full w-full">
                <AspectRatio ratio={576 / 449}>
                  <Image
                    alt="process-diagram"
                    className="relative z-20 rounded-2xl object-cover shadow-sm"
                    fill
                    src={shipmentHistoryImage}
                  />
                </AspectRatio>
                <div className="absolute -top-4 -right-4 z-10 h-full w-full rounded-2xl bg-white/90" />
              </div>
            </div>
            <div className="lora-400">
              <div className="text-2xl">Shipment Tracking</div>
              <div className="inter-400 mt-6">
                Vague shipment statuses from the official app are resolved by
                automating tracking via Poland Post&apos;s public SOAP API, with
                email notifications for each update.
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="group relative overflow-hidden rounded-md border-2 border-neutral-700 p-1 transition-colors duration-300 hover:border-neutral-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        alt="process-diagram"
                        className="h-full w-full object-fill opacity-50"
                        src={shipmentTrackingDiagram}
                      />
                    </div>
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                      <ImageIcon />
                    </div>
                  </Zoom>
                </div>
                <div className="group relative overflow-hidden rounded-md border-2 border-neutral-700 p-1 transition-colors duration-300 hover:border-neutral-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        alt="app"
                        className="h-full w-full object-fill opacity-50"
                        src={shipmentHistoryImage}
                      />
                    </div>
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
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
            className="flex flex-col items-center gap-8 md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative w-full shrink-0 pt-4 pr-4 md:w-1/2">
              <div className="relative h-full w-full">
                <AspectRatio ratio={576 / 449}>
                  <Image
                    alt="process-diagram"
                    className="relative z-20 rounded-2xl shadow-sm"
                    src={appBookPreviewImage}
                  />
                </AspectRatio>
                <div className="absolute -top-4 -right-4 z-10 h-full w-full rounded-2xl bg-[#b5b0a8]" />
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
              <div className="mt-4 mt-6 flex flex-wrap gap-4">
                <div className="group relative overflow-hidden rounded-md border-2 border-neutral-700 p-1 transition-colors duration-300 hover:border-neutral-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        alt="process-diagram"
                        className="h-full w-full object-fill opacity-50"
                        src={appBookPreviewImage}
                      />
                    </div>
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                      <ImageIcon />
                    </div>
                  </Zoom>
                </div>
                <div className="group relative overflow-hidden rounded-md border-2 border-neutral-700 p-1 transition-colors duration-300 hover:border-neutral-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        alt="app"
                        className="h-full w-full object-fill opacity-50"
                        src={appCreateWorkImage}
                      />
                    </div>
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                      <ImageIcon />
                    </div>
                  </Zoom>
                </div>
                <div className="group relative overflow-hidden rounded-md border-2 border-neutral-700 p-1 transition-colors duration-300 hover:border-neutral-300">
                  <Zoom>
                    <div className="relative h-20">
                      <Image
                        alt="app"
                        className="h-full w-full object-fill opacity-50"
                        src={appUpdateBookImage}
                      />
                    </div>
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
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
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative w-full shrink-0 pt-4 pr-4 md:w-1/2">
              <div className="relative h-full w-full">
                <AspectRatio ratio={576 / 449}>
                  <Image
                    alt="process-diagram"
                    className="relative z-20 rounded-2xl border border-neutral-900/50 object-cover shadow-neutral-900 shadow-sm"
                    fill
                    src={appPersonalSite}
                  />
                </AspectRatio>
                <div className="absolute -top-4 -right-4 z-10 h-full w-full rounded-2xl bg-neutral-950/90" />
              </div>
            </div>
            <div className="lora-400">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
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
              <div className="mt-6 flex flex-wrap gap-4">
                <AnimatedLink href="https://github.com/nonameprogram/portfolio">
                  <SiGithub className="size-4" />
                  <span>View on GitHub</span>
                  <ExternalLinkIcon />
                </AnimatedLink>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-8 md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="lora-400">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div className="text-2xl">WebSocketKit</div>
              </div>
              <div className="inter-400 mt-6">
                Issues with missing type definitions and unstable real-time
                listeners in the provided SDK are resolved by introducing a
                type-safe abstraction that centrally manages listener
                lifecycles, ensuring unsubscribe is triggered only when no
                active listeners remain.
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {["TypeScript", "Pusher", "Vitest"]
                  .sort()
                  .map((tech, index) => (
                    <Pill content={tech} key={index} />
                  ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
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

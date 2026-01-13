"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import shipmentTrackingDiagram from "../../-assets/shipment-tracking-diagram.svg";
import shipmentHistoryImage from "../../-assets/shipment-tracking-app-shipment-history.png";
import appCreateWorkImage from "../../-assets/app/app-create-work.png";
import appBookPreviewImage from "../../-assets/app/app-book-preview.png";
import appUpdateBookImage from "../../-assets/app/app-update-book.png";
import { ImageIcon } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Pill } from "@/components/pill";
import { PillGroup } from "@/components/pill-group";

export const ProjectsSection = () => {
  return (
    <div className="space-y-16">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="projects"
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
              {["TypeScript", "Pusher", "Vitest"].sort().map((tech, index) => (
                <Pill key={index} content={tech} />
              ))}
            </div>
            <div className="mt-6 inter-400">
              Issues with missing type definitions and unstable real-time
              listeners in the provided SDK are resolved by introducing a
              type-safe abstraction that centrally manages listener lifecycles,
              ensuring unsubscribe is triggered only when no active listeners
              remain.
            </div>
          </div>
        </div>
        <div className="h-px bg-neutral-900 w-1/2" />
        <div className="flex flex-col gap-y-8">
          <div className="lora-400">
            <div className="text-2xl">Shipment Tracking</div>
            <PillGroup
              items={[
                "TypeScript",
                "NestJS",
                "TanStack Start",
                "SOAP",
                "React",
              ]}
            />
            <div className="inter-400 mt-6">
              Vague shipment statuses from the official app are resolved by
              automating tracking via Poland Post&apos;s public SOAP API, with
              email notifications for each update.
            </div>
            <div className="flex flex-wrap mt-4 gap-4">
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
          </div>
        </div>
        <div className="h-px bg-neutral-900 w-1/2" />
        <div className="flex flex-col gap-y-8">
          <div className="lora-400">
            <div className="text-2xl">Book Collections</div>
            <PillGroup
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
            <div className="inter-400 mt-6">
              To address duplicate book orders and incomplete entries on
              platforms like Goodreads, a personal library management system
              tracks the entire collection, including multilingual titles, and
              efficiently manages reading history.
            </div>
            <div className="flex flex-wrap mt-4 gap-4">
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

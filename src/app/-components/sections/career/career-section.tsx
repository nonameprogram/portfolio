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
import { careerEntries } from "@/app/-components/sections/career/constants";

export const CareerSection = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col gap-16 py-16" id="career">
        <motion.div
          className="lora-400 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <div>03</div>
          <div>/</div>
          <div className="bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text whitespace-nowrap text-transparent">
            Career Journey
          </div>
        </motion.div>
        <div className="flex flex-col gap-y-8">
          <div className="inter-400">
            <Timeline>
              {careerEntries.map((entry, index) => (
                <TimelineEntry icon={entry.icon} key={index}>
                  <div className="transition-all duration-300 hover:-translate-y-2">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                    >
                      <div className="rounded-2xl border border-[#222] bg-[#111] p-8">
                        <div className="flex flex-col justify-between gap-y-2 md:flex-row">
                          <div className="flex flex-col items-start justify-center">
                            <TimelineTitle>{entry.title}</TimelineTitle>
                            <TimelineSubtitle>
                              {entry.subtitle}
                            </TimelineSubtitle>
                          </div>
                          <div className="flex flex-col gap-1 text-sm md:items-end">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="size-4" />
                              <div>{entry.date}</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPinIcon className="size-4" />
                              <span>{entry.location}</span>
                            </div>
                          </div>
                        </div>
                        <TimelineContent className="space-y-2">
                          <div className="mt-3 flex items-center gap-x-1 text-violet-400">
                            <TrendingUpIcon className="size-4" />
                            <span className="inter-500 text-sm">
                              Key Achievements
                            </span>
                          </div>
                          {entry.achievements.map((achievement, index) => (
                            <div key={index}>- {achievement}</div>
                          ))}
                          <PillGroup
                            items={entry.skills}
                            pillClasses="bg-neutral-800 hover:bg-neutral-700"
                          />
                        </TimelineContent>
                      </div>
                    </motion.div>
                  </div>
                </TimelineEntry>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

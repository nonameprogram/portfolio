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
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.3,
        }}
        id="career"
      >
        <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap">
          <div>03</div>
          <div>/</div>
          <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
            Career Journey
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="inter-400">
            <Timeline>
              {careerEntries.map((entry, index) => (
                <TimelineEntry icon={entry.icon} key={index}>
                  <div className="hover:-translate-y-2 transition-all duration-300">
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
                      <div className="p-8 border rounded-2xl bg-[#111] border-[#222]">
                        <div className="flex gap-y-2 flex-col md:flex-row justify-between">
                          <div className="flex flex-col items-start justify-center">
                            <TimelineTitle>{entry.title}</TimelineTitle>
                            <TimelineSubtitle>
                              {entry.subtitle}
                            </TimelineSubtitle>
                          </div>
                          <div className="flex flex-col gap-1 md:items-end text-sm">
                            <div className="flex gap-1 items-center">
                              <CalendarIcon className="size-4" />
                              <div>{entry.date}</div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <MapPinIcon className="size-4" />
                              <span>{entry.location}</span>
                            </div>
                          </div>
                        </div>
                        <TimelineContent className="space-y-2">
                          <div className="flex text-violet-400 gap-x-1 items-center mt-3">
                            <TrendingUpIcon className="size-4" />
                            <span className="text-sm inter-500">
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
      </motion.div>
    </div>
  );
};

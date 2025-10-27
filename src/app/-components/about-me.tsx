"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineEntry,
  TimelineSubtitle,
  TimelineTitle,
} from "@/app/-components/timeline";
import { scrollToSectionHandler } from "@/app/-utils/scroll-to-section-handler";

const Pill = ({ text }: { text: string }) => (
  <div className="bg-neutral-800 py-1 px-3 lora-400 hover:bg-neutral-300 hover:text-black transition-colors duration-300">
    {text}
  </div>
);

export default function AboutMe() {
  return (
    <div className="relative flex flex-col bg-neutral-900 rounded-t-4xl">
      <div className="container mx-auto px-12 pb-24 flex flex-col gap-16 relative grow">
        <div className="flex gap-x-4 relative">
          <div className="grid grid-cols-3 gap-24 relative">
            <div className="col-span-3 xl:col-span-2">
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  id="about-me"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="lora-400 text-4xl">01 / About Me</div>
                  <div className="flex flex-col gap-y-8">
                    <div className="inter-400 text-lg">
                      I’m a{" "}
                      <span className="underline">Software Developer</span>{" "}
                      driven by a passion for creating secure, high-performance
                      solutions.
                    </div>
                    <div className="inter-400 text-lg">
                      The part I enjoy the most is building{" "}
                      <span className="underline">tools</span> that help other
                      developers — making their work faster, easier, and more
                      enjoyable. I love finding ways to streamline workflows,
                      create reusable components, and improve overall
                      architecture.
                    </div>
                    <div className="inter-400 text-lg">
                      Amidst all of this, I always find opportunities to explore
                      new technologies — each one feels like an{" "}
                      <span className="underline">adventure</span> that fuels my
                      curiosity and drives me to learn and understand things on
                      a deeper level.
                    </div>

                    <div className="inter-400 text-lg">
                      When I’m not coding, you’ll probably find me reading light
                      novels, experimenting in the kitchen, or exercising.
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-800 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="experience"
                >
                  <div className="lora-400 text-4xl">02 / Experience</div>
                  <div className="flex flex-col gap-y-8">
                    <div className="inter-400">
                      <Timeline>
                        <TimelineEntry
                          icon={
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-3 text-neutral-950"
                            >
                              <path
                                d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          }
                        >
                          <TimelineTitle>Software Developer</TimelineTitle>
                          <TimelineSubtitle>
                            Link-Point, 2022 - Present
                          </TimelineSubtitle>
                          <TimelineContent>
                            <div className="text-neutral-300 mt-4">
                              {/*- Projektowanie i wdrożenie modułowej architektury w*/}
                              {/*monorepo dla aplikacji on-premise.*/}- Design
                              and implementation of modular architecture in
                              monorepo for on-premise applications.
                            </div>
                            <div className="text-neutral-300">
                              {/*- Utrzymanie i rozwój istniejących systemów,*/}
                              {/*zapewniający ich nieprzerwaną funkcjonalność oraz*/}
                              {/*zgodność z wymaganiami biznesowymi.*/}-
                              Maintenance and development of existing systems,
                              ensuring their uninterrupted functionality and
                              compliance with business requirements.
                            </div>
                            <div className="text-neutral-300">
                              - Responsible for creating and maintaining
                              comprehensive technical documentation for internal
                              systems to improve onboarding and team knowledge
                              sharing.
                            </div>
                            <div className="flex mt-4 gap-2 text-sm flex-wrap">
                              {[
                                "TypeScript",
                                "React",
                                "Laravel",
                                "Redis",
                                "MDX",
                                "Docker",
                                "PHPUnit",
                                "Vitest",
                                "Slim",
                              ]
                                .sort()
                                .map((tech, index) => (
                                  <Pill key={index} text={tech} />
                                ))}
                            </div>
                          </TimelineContent>
                        </TimelineEntry>
                        <TimelineEntry
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="size-4 text-neutral-950"
                            >
                              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                              <path d="M22 10v6" />
                              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                            </svg>
                          }
                        >
                          <TimelineTitle>
                            Technical College for Computer Science
                          </TimelineTitle>
                          <TimelineSubtitle>2017 - 2021</TimelineSubtitle>
                          <TimelineContent>
                            <div className="text-neutral-300 mt-4">
                              - Laureate of Polish Technical Innovation and
                              Invention Olympiad in category didactic help
                              (co-creator of educational web platform Live-Text
                              for online learning and examing).
                            </div>
                            <div className="flex mt-4 gap-2 text-sm flex-wrap">
                              {["JavaScript", "PHP", "MySQL", "WebSockets"]
                                .sort()
                                .map((tech, index) => (
                                  <Pill key={index} text={tech} />
                                ))}
                            </div>
                          </TimelineContent>
                        </TimelineEntry>
                      </Timeline>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-800 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="projects"
                >
                  <div className="lora-400 text-4xl">03 / Projects</div>
                  <div className="flex flex-col gap-y-8">
                    <div className="lora-400">
                      <div className="flex justify-between">
                        <div className="text-2xl">Websocketkit</div>
                        <a
                          href="https://www.npmjs.com/package/websocketkit"
                          className="flex items-center gap-2 hover:underline"
                        >
                          See it on npm{" "}
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
                      <div className="mt-2 flex gap-2 text-sm flex-wrap">
                        {["TypeScript", "Pusher"].sort().map((tech, index) => (
                          <Pill key={index} text={tech} />
                        ))}
                      </div>
                      <div className="mt-6 inter-400">
                        While implementing real-time communication between the
                        client and server, I discovered that the provided SDK
                        lacked proper type definitions, and calling unsubscribe
                        in one place stopped listeners from receiving updates in
                        other parts of the application. To solve this, I
                        implemented a type-safe abstraction that manages
                        listener lifecycles, ensuring unsubscribe is called only
                        when no listeners remain.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="lora-400">
                      <div className="text-2xl">Shipment Tracking</div>
                      <div className="mt-2 flex gap-2 text-sm flex-wrap">
                        {["TypeScript", "NestJS", "SOAP", "React"]
                          .sort()
                          .map((tech, index) => (
                            <Pill key={index} text={tech} />
                          ))}
                      </div>
                      <div className="inter-400 mt-6">
                        When ordering packages from abroad, I often faced
                        situations where the courier couldn’t reach me or I
                        didn’t have enough cash on hand. I didn’t want to
                        manually check the shipment status every day, and the
                        official app provided only three vague statuses — with
                        the last one always being “in transit.” <br />
                        <br />
                        Using the public SOAP API provided by the Poland Post, I
                        automated the entire shipment tracking process and added
                        email notifications for status updates.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="lora-400">
                      <div className="text-2xl">Book Collections</div>
                      <div className="mt-2 flex gap-2 text-sm flex-wrap">
                        {[
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
                        ]
                          .sort()
                          .map((tech, index) => (
                            <Pill key={index} text={tech} />
                          ))}
                      </div>
                      <div className="inter-400 mt-6">
                        Frustrated by duplicate book orders and missing entries
                        in platforms like Goodreads (especially for books in
                        non-English languages), I am developing a personal
                        library management system. This will allow me to track
                        my entire collection, including multilingual titles, and
                        efficiently manage my reading history.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="h-px bg-neutral-800 w-full" />
              <div className="space-y-16">
                <motion.div
                  className="flex flex-col gap-16 py-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  id="contact"
                >
                  <div className="lora-400 text-4xl">04 / Contact</div>
                  <div className="flex flex-col gap-2">
                    <a
                      className="flex items-center gap-2 hover:underline"
                      href="mailto:contact@bkosinski.dev"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      contact@bkosinski.dev
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Find me on LinkedIn
                    </a>
                    <a
                      href="https://github.com/nonameprogram"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Find me on GitHub
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="hidden xl:block sticky top-0 text-neutral-300 text-lg h-max pt-24">
              <ul className="space-y-2">
                <li className="lora-400">
                  <a
                    href="#about-me"
                    className="hover:underline"
                    onClick={scrollToSectionHandler("about-me")}
                  >
                    About Me
                  </a>
                </li>
                <li className="lora-400">
                  <a
                    href="#experience"
                    className="hover:underline"
                    onClick={scrollToSectionHandler("experience")}
                  >
                    Experience
                  </a>
                </li>
                <li className="lora-400">
                  <a
                    href="#projects"
                    className="hover:underline"
                    onClick={scrollToSectionHandler("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className="lora-400">
                  <a
                    href="#contact"
                    className="hover:underline"
                    onClick={scrollToSectionHandler("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

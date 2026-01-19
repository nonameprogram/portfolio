"use client";

import { motion, useTransform } from "motion/react";
import PageContent from "./-components/page-content";
import React from "react";
import { useScroll } from "motion/react";
import {
  BrainIcon,
  BriefcaseBusinessIcon,
  LayersIcon,
  MailIcon,
  RocketIcon,
} from "lucide-react";
import PixelBlast from "@/components/pixel-blast";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });

  const opacity = useTransform(scrollY, [1200, 1], [0, 1]);
  const scale = useTransform(scrollY, [1200, 1], [0.8, 1]);

  return (
    <div className="flex flex-col">
      <div
        className="flex w-full flex-col"
        style={{ minHeight: "100dvh" }}
        ref={ref}
      >
        <motion.div
          className="relative grid h-full w-full grow"
          style={{ scale }}
        >
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="relative h-full w-full opacity-50">
              <PixelBlast
                variant="circle"
                pixelSize={6}
                color="#B19EEF"
                patternScale={3}
                patternDensity={1.2}
                pixelSizeJitter={0.5}
                enableRipples={false}
                // rippleSpeed={0.4}
                // rippleThickness={0.12}
                // rippleIntensityScale={1.5}
                liquid={false}
                // liquidStrength={0.12}
                // liquidRadius={1.2}
                // liquidWobbleSpeed={5}
                speed={0.6}
                edgeFade={0.25}
                transparent
              />
            </div>
          </div>
          <div className="relative container mx-auto flex h-full w-full flex-col gap-16 px-6 py-12 md:px-12">
            <div className="relative grid h-full w-full grid-cols-1 justify-center gap-y-8 xl:grid-cols-2">
              <motion.div
                className="flex h-full w-full items-center"
                style={{ opacity }}
              >
                <div className="relative flex w-full flex-col items-center md:items-start">
                  <motion.div
                    className="flex w-max items-center gap-2 rounded-full border border-violet-300/30 bg-neutral-950 px-3 py-2 shadow shadow-violet-700/30"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween" }}
                  >
                    <div className="size-2 animate-pulse rounded-full bg-linear-to-br from-violet-300 to-violet-400" />
                    <span>Available for new opportunities</span>
                  </motion.div>
                  <div className="lora-400 relative z-20 space-y-4 space-x-2 p-8 text-3xl xl:text-4xl">
                    <div className="space-x-2">
                      <motion.span
                        className="inline-block transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween" }}
                      >
                        Hi,{" "}
                      </motion.span>
                      <motion.span
                        className="inline-block transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, type: "tween" }}
                      >
                        I&#39;m{" "}
                      </motion.span>
                      <motion.span
                        className="inline-block transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "tween" }}
                      >
                        Bartłomiej
                      </motion.span>
                    </div>
                    <div className="flex gap-x-2">
                      <motion.div
                        className="relative transition-opacity lg:ml-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, type: "tween" }}
                        data-show={true}
                      >
                        Software{" "}
                      </motion.div>
                      <motion.div
                        className="relative transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, type: "tween" }}
                        data-show={true}
                      >
                        Developer
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-2 xl:grid-cols-3">
                <button
                  onClick={() => {
                    const section = document.getElementById("about-me");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <motion.div
                    className="group col-start-1 row-start-1 h-full min-h-48 w-full cursor-pointer rounded-tl-xl bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-300 hover:text-black md:min-h-64"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="relative flex h-full flex-col">
                      <div className="lora-400 text-left">01</div>
                      <div className="lora-400 mt-auto text-right">
                        About Me
                      </div>
                      <div className="absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <BrainIcon strokeWidth={1} className="size-12" />
                      </div>
                    </div>
                  </motion.div>
                </button>
                <motion.button
                  className="group col-start-2 row-start-1 h-full min-h-48 w-full cursor-pointer rounded-tr-xl bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-300 hover:text-black md:min-h-64 xl:rounded-tr-none"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  onClick={() => {
                    const section = document.getElementById("techstack");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="lora-400 text-left">02</div>
                    <div className="lora-400 mt-auto text-right">TechStack</div>
                    <div className="absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <LayersIcon strokeWidth={1} className="size-12" />
                    </div>
                  </div>
                </motion.button>
                <motion.button
                  className="group col-start-1 row-start-2 h-full min-h-48 w-full cursor-pointer bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-300 hover:text-black md:min-h-64 xl:col-start-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    const section = document.getElementById("career");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="lora-400 text-left">03</div>
                    <div className="lora-400 mt-auto text-right">Career</div>
                    <div className="absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <BriefcaseBusinessIcon
                        strokeWidth={1}
                        className="size-12"
                      />
                    </div>
                  </div>
                </motion.button>
                <motion.button
                  className="group col-start-2 row-start-2 h-full min-h-48 w-full cursor-pointer bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-300 hover:text-black md:min-h-64 xl:col-start-3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="lora-400 text-left">04</div>
                    <div className="lora-400 mt-auto text-right">Projects</div>
                    <div className="absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <RocketIcon strokeWidth={1} className="size-12" />
                    </div>
                  </div>
                </motion.button>
                <motion.button
                  className="group col-start-1 row-start-3 h-full min-h-48 w-full cursor-pointer rounded-bl-xl bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-300 hover:text-black md:min-h-64 xl:col-start-3 xl:rounded-br-xl xl:rounded-bl-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="lora-400 text-left">05</div>
                    <div className="lora-400 mt-auto text-right">Contact</div>
                    <div className="absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <MailIcon strokeWidth={1} className="size-12" />
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
            <motion.div style={{ opacity }}>
              <motion.div
                className="lora-400 relative bottom-0 left-0 shrink-0 text-center text-neutral-300 transition-opacity xl:absolute xl:bottom-12 xl:left-12 xl:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/"
                    className="flex items-center"
                  >
                    <svg
                      width="20"
                      height="20"
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
                  </a>
                  <a
                    href="https://github.com/nonameprogram"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <svg
                      width="20"
                      height="20"
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
                  </a>
                </div>
                <div>@ bkosinski.dev</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <PageContent />
    </div>
  );
}

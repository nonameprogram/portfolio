"use client";

import { TypingText } from "@/app/-components/typing-text";
import {
  motion,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import AboutMe from "./-components/about-me";
import React from "react";
import { useScroll } from "motion/react";

const AnimatedTypingText = motion(TypingText);

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
  });

  const opacity = useTransform(scrollY, [800, 1], [0, 1]);
  const scale = useTransform(scrollY, [800, 1], [0.8, 1]);

  return (
    <div className="flex flex-col">
      <div
        className="w-full flex flex-col"
        style={{ minHeight: "100dvh" }}
        ref={ref}
      >
        <motion.div
          className="w-full h-full relative flex flex-col"
          // initial={{ opacity: 0, scale: 0.8 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ amount: 0.5 }}
          style={{ opacity, scale }}
        >
          <div className="container mx-auto my-12 flex w-full flex-col gap-16 h-full relative">
            <div className="grid gap-y-8 xl:grid-cols-2 justify-center h-full w-full relative">
              <div className="w-full items-center h-full flex">
                <div className="relative">
                  <div className="space-y-4 relative p-8 z-20">
                    <motion.div className="space-x-2">
                      <motion.span
                        className="text-4xl lora-400 inline-block transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween" }}
                      >
                        Hi,{" "}
                      </motion.span>
                      <motion.span
                        className="text-4xl lora-400 inline-block transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, type: "tween" }}
                      >
                        I&#39;m{" "}
                      </motion.span>
                      <AnimatedTypingText
                        className="text-4xl lora-400 transition-opacity"
                        text={["Bartłomiej", "nonameprogram"]}
                        pauseDuration={3000}
                        typingSpeed={50}
                        initialDelay={300}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "tween" }}
                      />
                    </motion.div>
                    <div className="flex gap-x-2">
                      <motion.div
                        className="lora-400 text-4xl ml-8 relative transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, type: "tween" }}
                        data-show={true}
                      >
                        Software{" "}
                      </motion.div>
                      <motion.div
                        className="lora-400 text-4xl relative transition-opacity"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, type: "tween" }}
                        data-show={true}
                      >
                        Developer
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute left-0 top-0 size-8 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "tween" }}
                  >
                    <div className="border-l border-t border-l-white border-t-white w-full h-full pt-px pl-px" />
                  </motion.div>
                </div>
              </div>
              <div className="w-full h-full grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-2">
                <button
                  onClick={() => {
                    const section = document.getElementById("about-me");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <motion.div
                    className="w-full h-full min-h-64 bg-neutral-900 col-start-1 row-start-1 rounded-tl-xl p-4 hover:bg-neutral-300 hover:text-black duration-300 cursor-pointer transition-all"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="lora-400 text-left">01</div>
                      <div className="mt-auto lora-400 text-right">
                        About Me
                      </div>
                    </div>
                  </motion.div>
                </button>
                <motion.button
                  className="w-full h-full min-h-64 bg-neutral-900 col-start-1 xl:col-start-2 row-start-2 p-4 hover:bg-neutral-300 hover:text-black duration-300 cursor-pointer transition-all"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    const section = document.getElementById("experience");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="lora-400 text-left">02</div>
                    <div className="mt-auto lora-400 text-right">
                      Experience
                    </div>
                  </div>
                </motion.button>
                <motion.button
                  className="w-full h-full min-h-64 bg-neutral-900 col-start-2 xl:col-start-3 row-start-2 p-4 hover:bg-neutral-300 hover:text-black duration-300 cursor-pointer transition-all"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="lora-400 text-left">03</div>
                    <div className="mt-auto lora-400 text-right">Projects</div>
                  </div>
                </motion.button>
                <motion.button
                  className="w-full h-full min-h-64 bg-neutral-900 col-start-2 xl:col-start-3 row-start-3 rounded-br-xl p-4 hover:bg-neutral-300 hover:text-black duration-300 cursor-pointer transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="lora-400 text-left">04</div>
                    <div className="mt-auto lora-400 text-right">Contact</div>
                  </div>
                </motion.button>
              </div>
            </div>
            <motion.div
              className="text-center w-full xl:text-left lora-400 text-neutral-300 shrink-0 xl:absolute relative bottom-0 left-0 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              @ bkosinski.dev
            </motion.div>
          </div>
        </motion.div>
      </div>
      <AboutMe />
    </div>
  );
}

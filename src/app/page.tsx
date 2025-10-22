"use client";

import { TypingText } from "@/app/-components/typing-text";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutMe from "./about-me/page";

const AnimatedTypingText = motion(TypingText);

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen relative flex flex-col">
      <div className="container mx-auto my-12 flex flex-col gap-16 h-full w-full relative grow">
        <div className="grid gap-y-8 xl:grid-cols-2 justify-center h-full w-full relative grow">
          <div className="w-full items-center h-full flex">
            <div className="relative w-max">
              <div className="space-y-4 relative p-8 z-20 w-max">
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
                <motion.div
                  className="lora-400 text-4xl ml-8 relative transition-opacity"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, type: "tween" }}
                  data-show={true}
                >
                  Software Developer
                </motion.div>
              </div>
              <motion.div
                className="absolute left-0 top-0 size-8 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, type: "tween" }}
              >
                <div className="bg-white w-full h-full pt-px pl-px">
                  <div className="w-full h-full bg-background" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-2">
            <Link href="/about-me">
              <motion.div
                className="w-full h-full min-h-64 bg-neutral-900 col-start-1 row-start-1 rounded-tl-xl p-4 hover:bg-neutral-300 hover:text-black duration-300 cursor-pointer transition-all"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div className="flex flex-col h-full">
                  <div className="lora-400 text-left">01</div>
                  <div className="mt-auto lora-400 text-right">About Me</div>
                </div>
              </motion.div>
            </Link>
            <motion.button
              className="w-full h-full min-h-64 bg-neutral-900 col-start-1 xl:col-start-2 row-start-2 p-4 hover:bg-neutral-300 hover:text-black duration-300 cursor-pointer transition-all"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col h-full">
                <div className="lora-400 text-left">02</div>
                <div className="mt-auto lora-400 text-right">
                  Work Experience
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
      <AboutMe />
    </div>
  );
}

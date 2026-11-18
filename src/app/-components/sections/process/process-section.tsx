"use client";

import { motion } from "motion/react";
import { processSteps } from "@/app/-components/sections/process/constants";

export const ProcessSection = () => (
  <motion.div
    className="flex flex-col gap-16 py-16"
    id="process"
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-end">
      <h2 className="font-light text-3xl text-white tracking-tight md:text-6xl lg:text-7xl">
        How We Work
      </h2>
      <p className="max-w-sm text-base text-neutral-400 md:text-right">
        A transparent, step-by-step process that keeps you in control, from the
        first conversation to a product running in production.
      </p>
    </div>

    <ol className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
      {processSteps.map((step, i) => (
        <motion.li
          className="flex flex-col gap-8 border-neutral-800 border-t pt-8"
          initial={{ opacity: 0, y: 30 }}
          key={step.number}
          transition={{
            damping: 20,
            delay: 0.1 * i,
            stiffness: 100,
            type: "spring",
          }}
          viewport={{ amount: 0.3, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="font-light text-5xl text-neutral-600 tracking-tight md:text-6xl">
            {step.number}
          </span>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl text-white tracking-tight">{step.title}</h3>
            <p className="text-base text-neutral-400 leading-relaxed">
              {step.text}
            </p>
          </div>
          <ul className="mt-auto flex flex-col gap-2 text-neutral-300 text-sm">
            {step.deliverables.map((deliverable) => (
              <li className="flex items-center gap-3" key={deliverable}>
                <span
                  aria-hidden="true"
                  className="h-px w-4 shrink-0 bg-neutral-500"
                />
                {deliverable}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  </motion.div>
);

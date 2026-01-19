"use client";

import React from "react";
import { motion } from "motion/react";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const ContactSection = () => {
  return (
    <div className="space-y-16">
      <motion.div
        className="flex flex-col gap-16 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        id="contact"
      >
        <div className="lora-400 text-4xl text-center inline-flex gap-x-2 justify-center flex-wrap">
          <div>05</div>
          <div>/</div>
          <div className="whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-violet-100 to-violet-300">
            Contact
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-2 hover:underline"
            href={"mailto:contact@bkosinski.dev"}
          >
            <EnvelopeClosedIcon />
            contact@bkosinski.dev
          </a>
          <a
            href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <LinkedInLogoIcon />
            <span>Find me on LinkedIn</span>
          </a>
          <a
            href="https://github.com/nonameprogram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <GitHubLogoIcon />
            <span>Find me on GitHub (personal)</span>
          </a>
          <a
            href="https://github.com/whatisphp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <GitHubLogoIcon />
            <span>Find me on GitHub (work)</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

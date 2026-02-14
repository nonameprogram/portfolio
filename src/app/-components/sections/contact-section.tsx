"use client";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "motion/react";

export const ContactSection = () => {
  return (
    <div className="space-y-16">
      <motion.div
        className="flex flex-col gap-16 py-16"
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="lora-400 inline-flex flex-wrap justify-center gap-x-2 text-center text-4xl">
          <div>05</div>
          <div>/</div>
          <div className="whitespace-nowrap bg-linear-to-br from-violet-100 to-violet-300 bg-clip-text text-transparent">
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
            className="flex items-center gap-2 hover:underline"
            href="https://www.linkedin.com/in/bart%C5%82omiej-kosi%C5%84ski-9141051b9/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInLogoIcon />
            <span>Find me on LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://github.com/nonameprogram"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubLogoIcon />
            <span>Find me on GitHub (personal)</span>
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://github.com/whatisphp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubLogoIcon />
            <span>Find me on GitHub (work)</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

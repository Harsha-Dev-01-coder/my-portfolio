"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#0c0c0c] px-6 py-24 text-white sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-[#111111] to-[#080808] px-7 py-14 text-center sm:px-16 sm:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Let&apos;s connect
        </p>

        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
          Have an opportunity?
          <br />
          <span className="text-blue-400">Let&apos;s talk.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          I&apos;m interested in frontend developer opportunities, internships,
          collaborations, and meaningful projects. Feel free to reach out.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:j.harshavardhan024@gmail.com"
            className="rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
          >
            Email Me ↗
          </a>

          <a
            href="https://github.com/Harsha-Dev-01-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
          >
            GitHub ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
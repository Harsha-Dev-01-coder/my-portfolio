"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"
      >
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold">
            Harsha<span className="text-blue-400">.</span>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Building modern experiences for the web.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <div className="flex gap-5 text-sm">
          <a
            href="https://github.com/Harsha-Dev-01-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-blue-400"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:j.harshavardhan024@gmail.com"
            className="text-gray-400 transition hover:text-blue-400"
          >
            Email ↗
          </a>
        </div>
      </motion.div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Harsha. All rights reserved.
      </div>
    </footer>
  );
}
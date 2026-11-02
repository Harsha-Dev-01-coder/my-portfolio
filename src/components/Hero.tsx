"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-6 py-32 text-white">
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
            <p className="text-sm font-medium tracking-wide text-gray-400">
              Available for opportunities
            </p>
          </div>

          <p className="text-base font-medium text-blue-400 sm:text-lg">
            Hello, I&apos;m Harsha.
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            I build digital
            <br />
            experiences that
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              make an impact.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400">
            Self-taught frontend developer focused on building modern,
            responsive, and user-friendly web applications using React,
            Next.js, TypeScript, and modern web technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-gray-500">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Supabase</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
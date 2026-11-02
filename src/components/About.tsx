"use client";

import { motion } from "motion/react";

const highlights = [
  { value: "03", label: "Projects Built" },
  { value: "React", label: "Frontend Library" },
  { value: "Next.js", label: "Full-Stack Framework" },
  { value: "Always", label: "Learning & Improving" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#080808] px-6 py-24 text-white sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Get to know me
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          About Me<span className="text-blue-400">.</span>
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
              Turning ideas into
              <span className="text-blue-400"> digital experiences.</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I&apos;m Harsha, a self-taught frontend developer passionate about
              building modern, responsive, and user-friendly web applications.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I work with React, Next.js, TypeScript, and modern frontend
              technologies. I enjoy solving problems, building real-world
              projects, and continuously improving my development skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <h4 className="text-2xl font-bold text-white sm:text-3xl">
                  {item.value}
                </h4>
                <p className="mt-3 text-sm text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
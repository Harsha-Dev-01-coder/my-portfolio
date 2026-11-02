"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#080808] px-6 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Selected work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects<span className="text-blue-400">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
            A selection of applications I&apos;ve designed and developed using
            modern frontend technologies.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-blue-400/30"
            >
              {/* Project Preview */}
              <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950/60 via-[#111827] to-[#080808] p-6">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={675}
                    className="h-full w-full rounded-lg object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                      Project {String(project.id).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-400" />
                  </div>
                )}

                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-gray-300">
                  Featured
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-xs font-medium text-blue-400">
                  Project {String(project.id).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.features?.length > 0 && (
                  <ul className="mt-5 grid gap-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-5 text-gray-400"
                      >
                        <span className="text-blue-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-500 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-400"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-white/50"
                  >
                    Source Code ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
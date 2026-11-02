"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    number: "02",
    title: "State & Data Management",
    description: "Managing application state and working with APIs and databases.",
    skills: [
      "Redux Toolkit",
      "React Hooks",
      "React Hook Form",
      "Axios",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Tools I use to build, manage, and deploy applications.",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-[#0c0c0c] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What I work with
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
            <span className="text-blue-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            The technologies and tools I use to develop modern web
            applications, manage data, and build reliable user experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <span className="text-sm font-medium text-blue-400">
                  {group.number}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-gray-300 transition duration-200 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          Harsha<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/Harsha-Dev-01-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-blue-500"
        >
          GitHub ↗
        </a>
      </nav>
    </motion.header>
  );
}
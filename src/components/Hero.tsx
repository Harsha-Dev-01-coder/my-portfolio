export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
          Frontend Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m Harsha.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I build modern, responsive web applications with React,
          Next.js, TypeScript, and modern frontend technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Harsha-Dev-01-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
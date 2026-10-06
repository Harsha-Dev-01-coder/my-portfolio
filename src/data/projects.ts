export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Movie Explorer",
    description:
      "A movie discovery application built with modern frontend technologies.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Harsha-Dev-01-coder",
    liveUrl: "https://harsha-dev-01-coder.github.io/movie-explorer/",
  },
];
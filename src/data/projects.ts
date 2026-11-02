export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Movie Explorer",
    description:
      "A movie discovery application for exploring popular, top-rated, and now-playing movies, searching for movies, viewing details, and managing favorites.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "TMDB API",
      "Vite",
    ],

    features: [
      "Browse popular, top-rated, and now-playing movies",
      "Search for movies",
      "View movie details",
      "Manage favorite movies",
      "Responsive interface",
      "Loading, error, and empty states",
    ],

    githubUrl:
      "https://github.com/Harsha-Dev-01-coder/movie-explorer",

    liveUrl:
      "https://harsha-dev-01-coder.github.io/movie-explorer/",
  },

  {
    id: 2,
    title: "Advanced Task Manager",
    description:
      "A responsive task-management dashboard featuring task CRUD, search, filtering, sorting, priority management, dashboard statistics, and browser-based persistence.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Vite",
    ],

    features: [
      "Create, view, update, and delete tasks",
      "Search and filter tasks",
      "Sort tasks",
      "Manage task priorities and statuses",
      "View dashboard statistics",
      "Persist task data in the browser",
      "Responsive dashboard layout",
    ],

    githubUrl:
      "https://github.com/Harsha-Dev-01-coder/advanced-task-manager",

    liveUrl:
      "https://harsha-dev-01-coder.github.io/advanced-task-manager/",
  },

  {
    id: 3,
    title: "E-Commerce Platform",

    description:
      "A full-stack e-commerce application built with Next.js, featuring product discovery, shopping cart management, user authentication, order processing, and administration.",

    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Supabase",
      "PostgreSQL",
      "React Hooks",
      "Vercel",
    ],

    features: [
      "Product catalog and product details",
      "Product search, filtering, and sorting",
      "Shopping cart and quantity management",
      "Wishlist management",
      "User authentication and profiles",
      "Shipping address management",
      "Checkout and order management",
      "Order history",
      "Admin product and order management",
      "Responsive interface",
    ],

    githubUrl:
      "https://github.com/Harsha-Dev-01-coder/ecommerce-platform",

    liveUrl:
      "https://ecommerce-platform-ten-gamma.vercel.app/",
  },
];
export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "taskfast",
    title: "TaskFast",
    description:
      "A MERN stack task management app for organizing and tracking daily work efficiently.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/prakashhi/mernfullproject",
    image: null,
    featured: true,
  },
  {
    slug: "empdaupdate",
    title: "EmpDaupdate",
    description:
      "An employee data management app for updating and organizing employee records.",
    tags: ["JavaScript", "React", "CSS"],
    // TODO: add the GitHub URL once confirmed
    image: null,
  },
  {
    slug: "stayfinder",
    title: "StayFinder",
    description:
      "A rental discovery platform that gives property owners a seamless, user-friendly experience.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prakashhi/Stayfinderapp",
    image: null,
    featured: true,
  },
  {
    slug: "music-app",
    title: "Music APP",
    description:
      "A Spotify-style music player with smooth animations that enhance the listening experience.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/prakashhi/spomusic",
    live: "https://prakashhi.github.io/spomusic/",
    image: null,
    featured: true,
  },
  {
    slug: "x-clone",
    title: "X_clone",
    description:
      "A responsive X (Twitter) clone with seamless user experiences across all devices.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/prakashhi/x_clone",
    live: "https://prakashhi.github.io/x_clonep/",
    image: null,
  },
  {
    slug: "ashpura-website",
    title: "Ashpura website",
    description:
      "An e-commerce website for a homemade papad brand, built with modern e-commerce UX principles.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prakashhi/Ashapura-home-made-papad",
    live: "https://prakashhi.github.io/Ashapura-home-made-papad/",
    image: null,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

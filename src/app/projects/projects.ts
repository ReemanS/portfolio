import xHotelImg from "@/app/projects/x-hotel.png";
import spaceHubImg from "@/app/projects/space-hub.png";
import { StaticImageData } from "next/image";

type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "X-Hotel",
    description: "A hotel booking website of the fictitious X-Hotel",
    image: xHotelImg,
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Firebase"],
    link: "https://x-hotel.vercel.app/",
  },
  {
    name: "Space Hub",
    description: "A place to view interesting space stuff",
    image: spaceHubImg,
    technologies: ["Flutter", "Dart"],
    link: "https://reemans.github.io/space-hub/",
  },
];

import { projects } from "@/app/projects/projects";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Projects() {
  return (
    <section className="min-h-screen h-max">
      <div className="md:pt-24 text-center">
        <h2>My Featured Projects</h2>
        <div className="pt-4 flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <a
              key={project.name}
              className="project-card p-4 rounded-lg max-w-md group"
              href={project.link}
            >
              <div className="object-contain">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg box-border group-hover:p-[0.08rem] group-active:p-[0.08rem] transition-all duration-200"
                />
              </div>

              <div className="text-left">
                <h3 className="pt-4 flex items-center">
                  <span className="pr-1">{project.name}</span>
                  <IoIosArrowRoundForward className="text-3xl text-slate-500 group-hover:translate-x-1 group-active:translate-x-1 transition duration-200" />
                </h3>
                <p className="pt-0.5">{project.description}</p>
                <div className="flex text-xs gap-3 py-1.5 text-slate-500 group-hover:text-text group-active:text-text transition duration-200">
                  {project.technologies.map((tech) => (
                    <div>{tech}</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

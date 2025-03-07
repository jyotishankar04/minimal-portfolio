import { _projects } from "@/app/constants/db";
import { ArrowUp, Github } from "lucide-react";
import Link from "next/link";
import { IoFileTrayOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="h-full w-full flex  flex-col ">
      {_projects.map((project, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 mt-4 p-4 hover:outline rounded-xl"
          >
            <Link
              href={`/projects/${project.id}`}
              className="text-2xl hover:text-accent cursor-pointer hover:underline font-bold flex items-center gap-2"
            >
              {<IoFileTrayOutline className="font-bold" />}

              {project.title}
              {project.isCurrent && (
                <div className="flex badge badge-success items-center gap-2">
                  <span>Currently Working</span>
                </div>
              )}
            </Link>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStacks.map((stack, index) => (
                <div key={index} className="badge badge-outline">
                  {<stack.icon />}
                  {stack.name}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xls items-center">
              {project.source.github && (
                <a
                  target="_blank"
                  href={project.source.github}
                  className="flex items-center gap-2 btn btn-outline btn-sm "
                >
                  Source Code <Github className="w-5 h-5" />
                </a>
              )}
              {project.source.live && (
                <a
                  target="_blank"
                  href={project.source.live}
                  className="flex items-center gap-2 btn btn-outline btn-sm "
                >
                  View Live <RiLiveLine className="w-5 h-5" />
                </a>
              )}
              {project.source.frontend && (
                <a
                  target="_blank"
                  className="flex items-center gap-2 btn btn-outline btn-sm"
                  href={project.source.frontend}
                >
                  Frontend Code
                  <ArrowUp className="rotate-45" />
                </a>
              )}
              {project.source.backend && (
                <a
                  target="_blank"
                  href={project.source.backend}
                  className="flex items-center gap-2 btn btn-outline btn-sm"
                >
                  Backend Code
                  <ArrowUp className="rotate-45" />
                </a>
              )}
            </div>
          </div>
        );
      })}
      <div className="pb-32"></div>
    </div>
  );
};

export default page;

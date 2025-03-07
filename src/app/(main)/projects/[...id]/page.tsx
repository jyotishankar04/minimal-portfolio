import { _projects } from "@/app/constants/db";
import { ArrowUp, Github } from "lucide-react";
import Image from "next/image";
import { RiLiveLine } from "react-icons/ri";
const Page = async (props: {
  params: Promise<{
    id: string[];
  }>;
}) => {
  const id = await props.params;
  const project = _projects.find((project) => project.id === id.id[0]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="flex flex-col gap-2 md:px-0 px-4 w-full pb-32 py-5">
      <h1 className="text-2xl font-bold flex items-center gap-5">
        {project.title}
        {project.isCurrent && (
          <span className="badge badge-success outline-2 outline-green-600 animate-pulse">
            Current
          </span>
        )}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full h-fit rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            className="rounded-lg w-full h-full md:grayscale hover:grayscale-0 object-cover duration-300 cursor-pointer transition-transform ease-in-out transform hover:scale-105 hover:brightness-110 hover:shadow-2xl"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-xl font-bold">Tech Stack</h1>
          <div className="flex flex-wrap gap-2">
            {project.techStacks.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 text-lg badge badge-outline cursor-pointer"
              >
                {<skill.icon />}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-lg w-10/12">{project.description}</p>
      <div className="w-full mt-4">
        <h1 className="text-xl font-bold">Links</h1>
        <ul className="flex gap-5 mt-2 w-full flex-wrap">
          {project.source.github && (
            <a
              target="_blank"
              href={project.source.github}
              className="flex items-center gap-2 btn btn-outline btn-sm"
            >
              Source Code <Github className="w-5 h-5" />
            </a>
          )}
          {project.source.live && (
            <a
              target="_blank"
              href={project.source.live}
              className="flex items-center gap-2 btn btn-outline btn-sm"
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
        </ul>
      </div>
    </div>
  );
};

export default Page;

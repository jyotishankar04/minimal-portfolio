import { _projects } from "@/app/constants/db";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { IoMdArrowUp } from "react-icons/io";

const HeroProjects = () => {
  return (
    <div className="flex flex-col py-6 justify-between w-full px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold">Projects</h1>
          <p className="text-sm md:text-base">View my projects</p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 hover:text-accent cursor-pointer group mt-4 md:mt-0"
        >
          All Projects
          <span className="text-xl md:text-2xl">
            <IoMdArrowUp className="rotate-45 duration-300 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </span>
        </Link>
      </div>
      <div className={`grid grid-cols-1 gap-4 mb-24 md:grid-cols-2`}>
        {_projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            source={project.source}
            techStacks={project.techStacks}
            isRow={index === 0}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{
  id: string;
  title: string;
  description: string;
  image: string;
  source: {
    github?: string;
    live?: string;
    frontend?: string;
    backend?: string;
  };
  index: number;
  isRow?: boolean;
  techStacks: { name: string; icon: IconType }[];
}> = ({ id, title, description, image, techStacks, isRow = true, index }) => {
  if (index >= 3) {
    return null;
  }
  return (
    <div
      className={`shadow-md shadow-inset flex flex-col-reverse  gap-4 border  border-base-300 group hover:border-2 hover:border-base-content duration-100 p-4 rounded-xl ${
        isRow ? "md:flex-row col-span-2 " : "md:flex-col"
      } ${index === 2 ? "hidden md:flex" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
        <div>
          <h3 className="font-bold text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStacks.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 text-xs badge badge-outline cursor-pointer"
              >
                {<skill.icon />}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={"/projects/" + id}
          className="flex items-center gap-2 hover:text-accent cursor-pointer group"
        >
          See Project
          <span className="text-xl">
            <IoMdArrowUp className="rotate-45 duration-300 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </span>
        </Link>
      </div>
      <div
        className={`
          w-full h-48 md:h-60 bg-base-300 rounded-xl overflow-hidden
          ${isRow ? "md:aspect-video" : "md:w-full"}
        `}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full group-hover:scale-105 duration-200 object-cover grayscale-50"
        />
      </div>
    </div>
  );
};

export default HeroProjects;

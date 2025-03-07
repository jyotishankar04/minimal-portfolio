import { techStacks } from "@/app/constants/db";

const HeroAbout = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center md:justify-start border-b border-base-300 w-full  py-5 gap-8">
      <div>
        <h1 className="text-2xl font-bold md:px-0 px-3">Skills</h1>
        <div className="flex flex-col gap-2 ml-5">
          <h3 className="font-bold text-xl ">Frontend</h3>
          <div className="flex flex-wrap   gap-2">
            {techStacks.frontend.map((skill) => (
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
        <div className="flex flex-col gap-2 ml-5">
          <h3 className="font-bold text-xl ">Backend</h3>
          <div className="flex flex-wrap  gap-2">
            {techStacks.backend.map((skill) => (
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
        <div className="flex flex-col gap-2 ml-5">
          <h3 className="font-bold text-xl ">Tools</h3>
          <div className="flex flex-wrap  gap-2">
            {techStacks.tools.map((skill) => (
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
        <div className="flex flex-col gap-2 ml-5">
          <h3 className="font-bold text-xl ">Languages</h3>
          <div className="flex flex-wrap  gap-2">
            {techStacks.languages.map((skill) => (
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
    </div>
  );
};

export default HeroAbout;

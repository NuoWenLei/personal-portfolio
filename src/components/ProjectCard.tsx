import { Project, ProjectLink } from "../projects";

const colors: { [key: string]: string } = {
  "Machine Learning": "bg-emerald-500",
  "Data Science": "bg-violet-400",
  "Software Engineering": "bg-amber-500",
};

export default function ProjectCard({
  index,
  project,
}: {
  index: number;
  project: Project;
}) {
  return (
    <div className={"w-full h-full flex "}>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="overflow-hidden rounded-lg w-3/4 mx-auto">
          <img className="h-full w-full " src={`./${project.titleImage}`} />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex flex-col justify-center w-3/5 gap-4 mx-auto">
          <h1 className="font-bold text-xl">{project.title}</h1>
          <p>{project.summary}</p>
          <div className="flex flex-row flex-wrap gap-4">
            {project.skills.map((skill: string) => (
              <span className={"rounded-full px-4 " + colors[skill]}>
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {project.tools.map((tool: string) => (
              <span className={"rounded-full px-4 bg-[#748CAB]"}>{tool}</span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {project.links.map((link: ProjectLink) => {
              return (
                <a
                  href={link.url}
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

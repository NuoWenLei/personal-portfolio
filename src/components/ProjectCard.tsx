import { Project, ProjectLink, skillColors } from "../projects";

export default function ProjectCard({
  index,
  project,
}: {
  index: number;
  project: Project;
}) {
  return (
    <div
      className={
        "mx-auto lg:w-[98%] xl:w-[90%] h-[75vh] flex flex-col lg:flex-row overflow-y-scroll pt-8 pb-12 lg:py-0 lg:overflow-y-auto rounded-xl bg-[#162037]"
      }
      key={index}
    >
      <div className="hidden h-full w-1/2 lg:flex flex-col justify-center">
        <div className="overflow-hidden rounded-lg w-3/4 mx-auto">
          <img
            className="h-full w-full object-cover"
            src={`./${project.titleImage}`}
            alt="project"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-16 w-full lg:px-0 lg:w-1/2 flex flex-col justify-center my-auto lg:my-0">
        <div className="flex flex-col justify-center w-full xl:w-4/5 gap-4 lg:pr-5 xl:mx-auto">
          {project.links.length > 0 ? (
            <a
              className="font-bold text-xl underline duration-300 underline-offset-4 decoration-transparent hover:decoration-white"
              href={project.links[0].url}
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
          ) : (
            <p className="font-bold text-xl underline duration-300 underline-offset-4 decoration-transparent hover:decoration-white">
              {project.title}
            </p>
          )}
          <p>{project.summary}</p>
          <div className="flex flex-row flex-wrap gap-4">
            {project.skills.map((skill: string) => (
              <span
                className={"rounded-full px-4 " + skillColors[skill]}
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {project.languages.map((lang: string) => (
              <span className={"rounded-full px-4 bg-[#40526a]"} key={lang}>
                {lang}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {project.tools.map((tool: string) => (
              <span className={"rounded-full px-4 bg-[#748CAB]"} key={tool}>
                {tool}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-start gap-x-6 gap-y-3">
            {project.links.map((link: ProjectLink, i) => {
              return (
                <>
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white text-white/70 duration-200"
                  >
                    {link.name}
                  </a>
                  {/* {i < project.links.length - 1 && (
                    <p className="text-xl text-white/70">|</p>
                  )} */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

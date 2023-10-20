import { Project } from "../projects";

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
        "w-full h-full flex " +
        (index % 2 == 0 ? "flex-row" : "flex-row-reverse bg-[#3E5C76]")
      }
    >
      <div className="w-1/2 flex flex-col justify-center">
        <div className="overflow-hidden rounded-lg w-3/4 h-1/2 mx-auto">
          <img
            className="h-full w-full "
            src={`./${project.id}/${project.titleImage}`}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex flex-col justify-center w-1/2 gap-4 mx-auto">
          <h1 className="font-bold text-xl">{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </div>
    </div>
  );
}

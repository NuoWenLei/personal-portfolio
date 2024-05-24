import { Project } from "../projects";

export default function MiniProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="relative h-40 w-1/5 rounded-lg overflow-hidden"
      key={index}
      onClick={onClick}
    >
      <img
        className="object-cover object-center absolute z-0 h-full w-full"
        src={project.titleImage}
        alt={project.title}
      />
      <div className="relative p-4 bg-[#0D1321]/80 w-full h-full z-10 font-medium">
        {project.title}
      </div>
    </button>
  );
}

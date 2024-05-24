import { useEffect, useState } from "react";
import {
  Project,
  skillColors,
  allTools,
  allSkills,
  Category,
} from "../projects";
import MiniProjectCard from "./MiniProjectCard";
import ProjectCard from "./ProjectCard";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [excludePartial, setExcludePartial] = useState<boolean>(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project>();

  useEffect(() => {
    // TODO: re-filter projects
    function createFilter(
      // project: Project,
      entries: string[],
      attribute: "skills" | "tools",
      excludePartialMatch: boolean
    ) {
      function genFilter(project: Project) {
        let passedMap = Object.fromEntries(
          entries.map((skill) => [skill, false])
        );

        project[attribute].forEach((skill) => {
          if (passedMap.hasOwnProperty(skill)) {
            passedMap[skill] = true;
          }
        });

        if (entries.length === 0) {
          return true;
        }

        if (excludePartialMatch) {
          return entries
            .map((skill) => passedMap[skill])
            .reduce((prev, curr) => prev && curr);
        } else {
          return entries
            .map((skill) => passedMap[skill])
            .reduce((prev, curr) => prev || curr);
        }
      }

      return genFilter;
    }

    setFilteredProjects(
      projects
        .filter(createFilter(selectedSkills, "skills", excludePartial))
        .filter(createFilter(selectedTools, "tools", excludePartial))
    );
  }, [selectedSkills, selectedTools, excludePartial, projects]);

  return (
    <>
      {showProject && selectedProject && (
        <div className="fixed w-screen h-screen inset-0 flex flex-row justify-center items-center z-50 bg-[#0D1321]/80">
          <ProjectCard index={100000} project={selectedProject} />
          <button
            type="button"
            className="h-8 w-8 text-white/70 absolute top-[18vh] right-[8vw] hover:text-white/90 duration-150"
            onClick={() => {
              setShowProject(false);
              setSelectedProject(undefined);
            }}
          >
            <XMarkIcon />
          </button>
        </div>
      )}
      <div className="relative ml-4 w-full h-full flex flex-row gap-x-6 bg-[#0D1321]">
        <div className="flex flex-col w-1/3 h-[95%] gap-y-6 p-4 rounded-lg bg-[#162037] overflow-y-scroll">
          <h3 className="font-medium text-xl">Filters</h3>
          <button
            type="button"
            className="flex flex-row items-center gap-x-3"
            onClick={() => setExcludePartial(!excludePartial)}
          >
            <div
              className={
                "rounded-sm border-2 border-white h-4 w-4 " +
                (excludePartial && "bg-white")
              }
            />
            <p className="">Exclude partial matches</p>
          </button>
          <div className="flex flex-col gap-y-8 mb-8">
            <div className="flex flex-row flex-wrap gap-4">
              {allSkills.map((skill: Category) => (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => {
                    if (selectedSkills.includes(skill.name)) {
                      setSelectedSkills(
                        selectedSkills.filter((v) => v !== skill.name)
                      );
                    } else {
                      setSelectedSkills([...selectedSkills, skill.name]);
                    }
                  }}
                  className={
                    "rounded-full px-4 " +
                    skillColors[skill.name] +
                    (selectedSkills.includes(skill.name)
                      ? " ring-2 ring-white ring-offset-2 ring-offset-[#0D4132]"
                      : "")
                  }
                >
                  {skill.name}
                  <span className="rounded-full px-1 text-sm bg-[#e8eefa] text-[#0D1321] ml-2">
                    {skill.count}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              {allTools.map((tool: Category) => (
                <button
                  key={tool.name}
                  type="button"
                  onClick={() => {
                    if (selectedTools.includes(tool.name)) {
                      setSelectedTools(
                        selectedTools.filter((v) => v !== tool.name)
                      );
                    } else {
                      setSelectedTools([...selectedTools, tool.name]);
                    }
                  }}
                  className={
                    "rounded-full px-4 bg-[#748CAB] outline-none " +
                    (selectedTools.includes(tool.name)
                      ? " ring-2 ring-white ring-offset-2 ring-offset-[#0D4132]"
                      : "")
                  }
                >
                  {tool.name}{" "}
                  <span className="rounded-full px-1 text-sm bg-[#e8eefa] text-[#0D1321] ml-0.5">
                    {tool.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-3/4 overflow-y-scroll gap-x-6 gap-y-4 items-start h-min max-h-5/6 bg-[#0D1321]">
          {filteredProjects.map((p, i) => (
            <MiniProjectCard
              key={i}
              project={p}
              index={i}
              onClick={() => {
                setSelectedProject(p);
                setShowProject(true);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

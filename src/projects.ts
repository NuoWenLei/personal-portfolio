import projectJSON from "./projects.json";

export type Project = {
  id: string;
  title: string;
  summary: string;
  titleImage: string;
  links: ProjectLink[];
  tools: string[];
  skills: string[];
  languages: string[];
  status: "current" | "highlight" | "archive";
};

export type Category = {
  name: string;
  count: number;
};

export type ProjectLink = {
  name: string;
  url: string;
};

export const skillColors: { [key: string]: string } = {
  "Machine Learning": "bg-emerald-500",
  "Data Science": "bg-violet-400",
  "Software Engineering": "bg-amber-500",
};

const allProjects: Project[] = projectJSON as Project[];

export const currentProjects: Project[] = allProjects.filter(
  (p) => p.status === "current"
);

export const projects: Project[] = allProjects.filter(
  (p) => p.status === "highlight"
);

export const projectArchives: Project[] = allProjects;

let tools = projectArchives.flatMap((p) => p.tools);
let skills = projectArchives.flatMap((p) => p.skills);
let languages = projectArchives.flatMap((p) => p.languages);

let toolCount = Object.fromEntries(
  tools
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((t) => [t, 0])
);

let skillCount = Object.fromEntries(
  skills
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((t) => [t, 0])
);

let languageCount = Object.fromEntries(
  languages
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((t) => [t, 0])
);

tools.forEach((t) => {
  toolCount[t] += 1;
});

skills.forEach((t) => {
  skillCount[t] += 1;
});

languages.forEach((t) => {
  languageCount[t] += 1;
});

export const allTools = Object.entries(toolCount).map((tc) => {
  return {
    name: tc[0],
    count: tc[1],
  } as Category;
});

export const allSkills = Object.entries(skillCount).map((tc) => {
  return {
    name: tc[0],
    count: tc[1],
  } as Category;
});

export const allLanguages = Object.entries(languageCount).map((tc) => {
  return {
    name: tc[0],
    count: tc[1],
  } as Category;
});

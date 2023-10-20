import HomeSwiper from "../components/HomeSwiper";
import ProjectCard from "../components/ProjectCard";
import { Project, projects } from "../projects";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100%-5rem)] overflow-y-scroll snap-y snap-mandatory">
      <div className="w-screen h-[100%] bg-personal bg-cover bg-center snap-center">
        <div className="w-screen h-full bg-[#1d2d44]/60 ">
          <div className="flex flex-col h-full mr-auto justify-center ml-16 text-[#B8C0C4]">
            <div className="font-bold text-6xl inline-flex gap-4">
              Hello, I’m <p className="text-white">Nuo Wen Lei</p>
            </div>
            <div className="font-bold text-6xl inline-flex gap-4">
              I'm an aspiring
              <div className="h-20">
                <HomeSwiper />
              </div>
            </div>
          </div>
        </div>
      </div>
      {projects.map((project: Project, index: number) => {
        return (
          <div className="w-screen h-[calc(100vh-5rem)] snap-center">
            <ProjectCard index={index} project={project} />
          </div>
        );
      })}
    </div>
  );
}

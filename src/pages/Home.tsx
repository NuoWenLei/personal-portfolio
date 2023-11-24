import { useState, useMemo } from "react";
import HomeSwiper from "../components/HomeSwiper";
import ProjectSwiper from "../components/ProjectSwiper";
import SocialPage from "../components/SocialPage";
import CredentialsPage from "../components/CredentialsPage";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { currentProjects, projects } from "../projects";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="w-screen h-full bg-personal bg-cover bg-center md:bg-center snap-center">
        <div className="w-screen h-full bg-[#1d2d44]/50 ">
          <div className="flex flex-col h-5/6 mr-auto justify-end xl:justify-center ml-16 pt-12 text-gray-300 gap-0">
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-row flex inline-flex pb-5">
              Hello <span className="ml-2 md:ml-4 text-[#89fffd]">World</span>!
            </div>
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-col md:flex-row flex inline-flex md:gap-4 pb-5 lg:pl-12">
              <span className="text-gray-300 inline md:hidden">
                My name is{" "}
              </span>
              <p className="text-[#ff00ff]">
                <span className="text-gray-300 hidden md:inline">I'm </span> Nuo
                Wen Lei
              </p>
            </div>
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-col md:flex-row flex md:inline-flex md:gap-4 h-16 lg:pl-24 mb-5 md:mb-0 lg:mb-5">
              <span className="inline">I bring</span>
              <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] md:from-20% to-50% md:to-80% to-[#89fffd]">
                Ideas to Life
              </span>
            </div>
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-col md:flex-row flex md:inline-flex md:gap-4 lg:pl-36">
              <span className="inline">with</span>
              <div className="h-32 md:h-16 overflow-hidden">
                <HomeSwiper />
              </div>
            </div>
          </div>
          <div className="relative flex flex-row h-1/6 justify-center">
            <ChevronDownIcon className="w-full h-2/3 mt-auto" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col snap-center divide-y-4 px-12 gap-4 pt-8 bg-[#0D1321]">
        <div className="text-gray-200 text-4xl md:text-6xl pl-4  w-full mt-4 font-semibold">
          Current Projects
        </div>
        <ProjectSwiper allProjects={currentProjects} />
      </div>
      <div className="w-full h-full flex flex-col snap-center divide-y-4 px-12 gap-4 pt-8">
        <div className="text-gray-200 text-4xl md:text-6xl pl-4  w-full mt-4 font-semibold">
          Past Projects
        </div>
        <ProjectSwiper allProjects={projects} />
      </div>
      <CredentialsPage />
      <div className="w-full h-full flex flex-col snap-center divide-y-4 px-12 gap-4 pt-8">
        <div className="text-gray-200 text-4xl md:text-6xl pl-4 w-full mt-8 font-semibold">
          Connect With Me!
        </div>
        <SocialPage />
      </div>
    </div>
  );
}

const useHover = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
    }),
    []
  );

  return [hovered, eventHandlers];
};

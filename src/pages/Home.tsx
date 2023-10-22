import { useState, useMemo } from "react";
import HomeSwiper from "../components/HomeSwiper";
import ProjectSwiper from "../components/ProjectSwiper";
import SocialPage from "../components/SocialPage";
import CredentialsPage from "../components/CredentialsPage";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="w-screen h-full bg-personal bg-cover bg-center snap-center">
        <div className="w-screen h-full bg-[#1d2d44]/50 ">
          <div className="flex flex-col h-5/6 mr-auto justify-center ml-16 pt-12 text-gray-300">
            <div className="font-bold text-6xl inline-flex gap-4">
              Hello, I’m <p className="text-white">Nuo Wen Lei</p>
            </div>
            <div className="font-bold text-6xl inline-flex gap-4">
              I'm an aspiring
              <div className="h-20 overflow-hidden">
                <HomeSwiper />
              </div>
            </div>
          </div>
          <div className="relative flex flex-row h-1/6 justify-center">
            <ChevronDownIcon className="w-full h-2/3 mt-auto" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col snap-center divide-y-4 px-12 gap-4 pt-8">
        <div className="text-gray-200 text-6xl pl-4  w-full mt-4 font-semibold">
          Past Projects
        </div>
        <ProjectSwiper />
      </div>
      <CredentialsPage />
      <div className="w-full h-full flex flex-col snap-center divide-y-4 px-12 gap-4 pt-8">
        <div className="text-gray-200 text-6xl pl-4 w-full mt-8 font-semibold">
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

import HomeSwiper from "../components/HomeSwiper";
import ProjectSwiper from "../components/ProjectSwiper";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100%-5rem)] overflow-y-scroll snap-y snap-mandatory">
      <div className="w-screen h-[100%] bg-personal bg-cover bg-center snap-center">
        <div className="w-screen h-full bg-[#1d2d44]/50 ">
          <div className="flex flex-col h-full mr-auto justify-center ml-16 text-gray-300">
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
        </div>
      </div>
      <div className="w-full h-full flex flex-col snap-center">
        <div className="text-gray-200 text-6xl text-center w-full mt-8 font-semibold">
          Past Projects
        </div>
        <ProjectSwiper />
      </div>
    </div>
  );
}

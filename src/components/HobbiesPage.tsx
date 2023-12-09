import { useState } from "react";

export default function HobbiesPage() {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  return (
    <div className="flex flex-row flex-wrap justify-center relative mt-4 overflow-hidden">
      <div className="relative h-[40%]">
        <div
          className={
            "absolute w-[560px] h-full bg-black rounded-md duration-500 " +
            (videoLoaded && "hidden")
          }
        >
          <div className="flex flex-col w-[560px] h-full animate-pulse p-4">
            <div className="flex flex-row w-full gap-4">
              <div className="rounded-full h-14 w-14 bg-gray-800 my-auto" />
              <div className="rounded-lg h-6 w-64 bg-gray-800 my-auto mr-32" />
              <div className="rounded-lg h-6 w-20 bg-gray-800 my-auto" />
            </div>
          </div>
        </div>
        <iframe
          className={"duration-500 z-10 " + (!videoLoaded && "z-0 opacity-0")}
          width="560"
          height="100%"
          loading="lazy"
          src="https://www.youtube.com/embed/oCPy2Drd_oQ?autoplay=1&amp;start=337&amp;mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setVideoLoaded(true)}
        ></iframe>
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./explore.jpg" alt="exploration" className="w-full h-full" />
      </div>

      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./sports2.jpg" alt="sports" className="w-full h-full" />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img
          src="./boardgame_cats.jpeg"
          alt="board game and cats"
          className="w-full h-full"
        />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./food2.jpg" alt="food2" className="w-full h-full" />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./explore2.jpg" alt="explore2" className="w-full h-full" />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./food1.jpg" alt="food" className="w-full h-full" />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./sports1.jpg" alt="sports" className="w-full h-full" />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./animal2.jpg" alt="animal2" className="w-full h-full" />
      </div>
      <div className="h-[40%] object-cover overflow-hidden">
        <img src="./food3.jpg" alt="more food" className="w-full h-full" />
      </div>
    </div>
  );
}

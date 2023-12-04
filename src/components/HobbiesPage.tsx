import { useState } from "react";

export default function HobbiesPage() {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-center relative mt-16">
      <div
        className={
          "absolute w-[560px] h-[315px] bg-black rounded-md duration-500 " +
          (videoLoaded && "opacity-0")
        }
      >
        <div className="flex flex-col w-[560px] h-[315px] animate-pulse p-4">
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
        height="315"
        loading="lazy"
        src="https://www.youtube.com/embed/oCPy2Drd_oQ?si=WVu5rYZBdiafq_65&amp;start=337"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setVideoLoaded(true)}
      ></iframe>
    </div>
  );
}

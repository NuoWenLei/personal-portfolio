// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Project } from "../projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSwiper({
  allProjects,
}: {
  allProjects: Project[];
}) {
  return (
    <Swiper
      style={{
        ["--swiper-pagination-color" as any]: "#FFFFFF",
        ["--swiper-pagination-bullet-inactive-color" as any]: "#b5b5b5",
      }}
      slidesPerView={1}
      className="w-full h-full overflow-hidden"
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: true,
      //   reverseDirection: false,
      // }}
      pagination={{
        clickable: false,
      }}
      loop={false}
      freeMode={{
        minimumVelocity: 0.5,
        enabled: true,
        momentumBounce: true,
        sticky: false,
      }}
      mousewheel={{
        releaseOnEdges: true,
        thresholdDelta: 20,
      }}
      modules={[Autoplay, Pagination, Mousewheel, FreeMode]}
    >
      {allProjects.map((project: Project, index: number) => {
        return (
          <SwiperSlide key={index} className={"w-screen h-[calc(100vh-5rem)]"}>
            <ProjectCard index={index} project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

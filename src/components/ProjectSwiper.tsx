// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects, Project } from "../projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSwiper() {
  return (
    <Swiper
      style={{
        ["--swiper-pagination-color" as any]: "#FFFFFF",
        ["--swiper-navigation-color" as any]: "#FFFFFF",
      }}
      slidesPerView={1}
      className="w-full h-full overflow-hidden"
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        reverseDirection: false,
      }}
      pagination={{
        clickable: false,
        bulletActiveClass: "swiper-pagination-bullet-active text-white",
      }}
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {projects.map((project: Project, index: number) => {
        return (
          <SwiperSlide key={index} className={"w-screen h-[calc(100vh-5rem)]"}>
            <ProjectCard index={index} project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

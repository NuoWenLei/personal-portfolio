// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/effect-flip";
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
        ["--swiper-navigation-color" as any]: "#FFFFFF",
        ["--swiper-pagination-bullet-inactive-color" as any]: "#b5b5b5",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        reverseDirection: false,
      }}
      pagination={{
        clickable: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      className="w-full h-full duration-300"
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {allProjects.map((project: Project, index: number) => {
        return (
          <SwiperSlide
            key={index}
            className={
              "w-screen h-[calc(100vh-5rem)] flex flex-row justify-center"
            }
          >
            <ProjectCard index={index} project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

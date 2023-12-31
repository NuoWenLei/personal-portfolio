// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function WordSwiper() {
  return (
    <Swiper
      direction={"vertical"}
      spaceBetween={50}
      slidesPerView={1}
      className="w-full h-full cursor-default pointer-events-none"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      navigation={false}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide className={"text-amber-500 brightness-110"}>
        Software Engineering
      </SwiperSlide>
      <SwiperSlide className={"text-emerald-500 brightness-110"}>
        Machine Learning
      </SwiperSlide>
      <SwiperSlide className={"text-violet-400 brightness-110"}>
        Data Science
      </SwiperSlide>
    </Swiper>
  );
}

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
      pagination={{
        clickable: false,
      }}
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="text-amber-500">Software Engineer</SwiperSlide>
      <SwiperSlide className="text-emerald-500">ML Researcher</SwiperSlide>
      <SwiperSlide className="text-violet-400">Data Scientist</SwiperSlide>
    </Swiper>
  );
}

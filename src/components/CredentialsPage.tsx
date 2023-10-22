import { Pagination, Navigation, Controller, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";
import { useState } from "react";

export default function CredentialsPage() {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  return (
    <div className="w-full h-full flex flex-row snap-center bg-[#0D1321]">
      <div className="flex flex-col w-3/5 divide-y-4 gap-4 h-full pt-8 px-12">
        <div className="text-gray-200 text-6xl pl-4 w-full mt-4 font-semibold">
          Credentials
        </div>
        <CredentialsSwiper controlledSwiper={controlledSwiper} />
      </div>
      <div className="w-2/5">
        <CredentialsBackgroundSwiper
          setControlledSwiper={setControlledSwiper}
        />
      </div>
    </div>
  );
}

function CredentialsSwiper({ controlledSwiper }: { controlledSwiper: any }) {
  return (
    <Swiper
      style={{
        ["--swiper-pagination-color" as any]: "#FFFFFF",
        ["--swiper-navigation-color" as any]: "#FFFFFF",
      }}
      controller={{ control: controlledSwiper }}
      spaceBetween={50}
      slidesPerView={1}
      className="w-full h-full duration-300"
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation, Controller]}
    >
      <SwiperSlide className={"w-full h-full"}>
        <EducationPage />
      </SwiperSlide>
      <SwiperSlide className={"text-emerald-500 w-full h-full"}>
        Professional Experience
      </SwiperSlide>
      <SwiperSlide className={"text-violet-400 w-full h-full"}>
        Certifications
      </SwiperSlide>
    </Swiper>
  );
}

interface CredentialProps {
  imgUrl: string;
  info: any;
}

function CredentialItem({ imgUrl, info }: CredentialProps) {
  return (
    <div className="flex flex-row gap-16">
      <div className="h-32 w-32 overflow-hidden rounded-lg p-4 bg-white">
        <img
          className="h-full w-full object-center object-cover"
          src={imgUrl}
          alt="image"
        />
      </div>
      {info}
    </div>
  );
}

function EducationPage() {
  return (
    <div className="h-full w-full flex flex-col px-16 mt-12 gap-20">
      <CredentialItem
        imgUrl={"./brownUniLogo.jpeg"}
        info={
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Brown University</p>
            <p className="text-md text-gray-300">September 2022 - Present</p>
            <p className="text-md mt-4">BSc in Computer Science</p>
          </div>
        }
      />
      <CredentialItem
        imgUrl={"./concordAcademy.jpeg"}
        info={
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Concord Academy</p>
            <p className="text-md text-gray-300">September 2018 - June 2022</p>
          </div>
        }
      />
    </div>
  );
}

function CredentialsBackgroundSwiper({
  setControlledSwiper,
}: {
  setControlledSwiper: (f: any) => void;
}) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="w-full h-full duration-300"
      onSwiper={setControlledSwiper}
      modules={[EffectFade, Controller]}
      effect={"fade"}
      loop={true}
    >
      <SwiperSlide className={"bg-brown_uni bg-cover bg-center w-full h-full"}>
        <div className="h-full w-full bg-[#1d2d44]/50"></div>
      </SwiperSlide>
      <SwiperSlide className={"bg-work bg-cover bg-center w-full h-full"}>
        <div className="h-full w-full bg-[#1d2d44]/50"></div>
      </SwiperSlide>
      <SwiperSlide className={"bg-remote bg-cover bg-center w-full h-full"}>
        <div className="h-full w-full bg-[#1d2d44]/50"></div>
      </SwiperSlide>
    </Swiper>
  );
}

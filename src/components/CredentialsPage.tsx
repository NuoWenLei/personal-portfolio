import { Pagination, Navigation, Controller, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function CredentialsPage() {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  return (
    <div className="w-full h-full flex flex-row snap-center bg-[#0D1321]">
      <div className="flex flex-col w-full lg:w-2/3 xl:w-1/2 divide-y-4 gap-4 h-full pt-8 px-12">
        <div className="text-gray-200 text-4xl md:text-6xl pl-4 w-full mt-4 font-semibold">
          Credentials{" "}
          <a
            href="./resume.pdf"
            target="_blank"
            className="text-sm underline underline-offset-2"
          >
            Resume
          </a>
        </div>
        <CredentialsSwiper controlledSwiper={controlledSwiper} />
      </div>
      <div className="hidden lg:w-1/3 lg:flex xl:w-1/2">
        {/* <CredentialsBackgroundSwiper
          setControlledSwiper={setControlledSwiper}
        /> */}
        <div className={"bg-brown_uni bg-cover bg-center w-full h-full"}>
          <div className="h-full w-full bg-[#1d2d44]/50"></div>
        </div>
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
      // controller={{ control: controlledSwiper }}
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
      <SwiperSlide className={"w-full h-full"}>
        <ProfessionalPage />
      </SwiperSlide>
      <SwiperSlide className={"w-full h-full"}>
        <OrganizationalPage />
      </SwiperSlide>
    </Swiper>
  );
}

interface CredentialProps {
  imgUrl: string;
  info: any;
}

function CredentialItem({ imgUrl, info }: CredentialProps) {
  // TODO: MIMIC linkedin items
  return (
    <div className="flex flex-row gap-16 my-10 group">
      <div className="hidden md:flex h-32 w-32 overflow-hidden rounded-lg p-4 bg-white">
        <img
          className="h-full w-full object-center object-cover rounded-lg"
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
    <div className="h-full w-full flex flex-col px-16 mt-12">
      <p className="text-2xl md:text-4xl font-bold">Education</p>
      <CredentialItem
        imgUrl={"./brownUniLogo.jpeg"}
        info={
          <div className="flex flex-col">
            <p className="text-xl md:text-2xl font-semibold">
              Brown University
            </p>
            <p className="text-md mb-2">BSc · Computer Science</p>
            <p className="text-md text-gray-300 mb-3">
              September 2022 - Present
            </p>
            {/* <CoursePopover /> */}
          </div>
        }
      />
      <CredentialItem
        imgUrl={"./concordAcademy.jpeg"}
        info={
          <div className="flex flex-col">
            <p className="text-xl md:text-2xl font-semibold">Concord Academy</p>
            <p className="text-md mb-2">High School</p>
            <p className="text-md text-gray-300">September 2018 - June 2022</p>
          </div>
        }
      />
    </div>
  );
}

function ProfessionalPage() {
  return (
    <div className="h-full w-full flex flex-col px-16 mt-12">
      <p className="text-2xl md:text-4xl font-bold">Professional Experience</p>
      <CredentialItem
        imgUrl={"./quantguide.svg"}
        info={
          <div className="flex flex-col">
            <a
              href="https://www.quantguide.io/"
              target="_blank"
              className="text-xl md:text-2xl font-semibold inline-flex gap-2"
            >
              QuantGuide{" "}
              <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                <LinkIcon className="h-4 w-4" />
              </span>
            </a>
            <p className="text-md mb-2">Software Engineer</p>
            <p className="text-md text-gray-300 mb-3">May 2023 - Present</p>
          </div>
        }
      />
      <CredentialItem
        imgUrl={"./numerai.png"}
        info={
          <div className="flex flex-col">
            <a
              href="https://numer.ai/"
              target="_blank"
              className="text-xl md:text-2xl font-semibold inline-flex gap-2"
            >
              Numerai{" "}
              <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                <LinkIcon className="h-4 w-4" />
              </span>
            </a>
            <p className="text-md mb-2">Software Engineering Intern</p>
            <p className="text-md text-gray-300">June 2023 - August 2023</p>
          </div>
        }
      />
    </div>
  );
}

function OrganizationalPage() {
  return (
    <div className="h-full w-full flex flex-col px-16 mt-12">
      <p className="text-2xl md:text-4xl font-bold">Organization Experience</p>
      <CredentialItem
        imgUrl={"./bmic.PNG"}
        info={
          <div className="flex flex-col">
            <a className="text-xl md:text-2xl font-semibold inline-flex gap-2">
              B-MIC{" "}
              <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                <LinkIcon className="h-4 w-4" />
              </span>
            </a>
            <p className="text-md mb-2">Executive Board Member</p>
            <p className="text-md text-gray-300 mb-3">October 2022 - Present</p>
          </div>
        }
      />
      <CredentialItem
        imgUrl={"./ep.jpeg"}
        info={
          <div className="flex flex-col">
            <a
              href="https://www.brownentrepreneurship.com/"
              target="_blank"
              className="text-xl md:text-2xl font-semibold inline-flex gap-2"
            >
              Entrepreneurship Program{" "}
              <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                <LinkIcon className="h-4 w-4" />
              </span>
            </a>
            <p className="text-md mb-2">Tech Team Member</p>
            <p className="text-md text-gray-300">October 2022 - Present</p>
          </div>
        }
      />
    </div>
  );
}

function CoursePopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md outline-none px-6 py-0.5 text-md bg-gray-600`}
          >
            <span>Relevant Courses</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                foobar
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
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

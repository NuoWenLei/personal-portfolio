import { Pagination, Navigation, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";
// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function CredentialsPage() {
  // const [controlledSwiper, _] = useState<any>(null);
  return (
    <>
      <div className="flex flex-col w-full gap-4 h-full pt-8 px-12">
        <div className="text-gray-200 text-4xl md:text-6xl pl-4 w-full mt-4 font-semibold">
          Credentials{" "}
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group text-base underline underline-offset-2 inline-flex gap-1"
          >
            Resume
            <span className="my-auto group-hover:opacity-100 opacity-0 duration-300">
              <LinkIcon className="h-3 w-3" />
            </span>
          </a>
        </div>
        <CredentialsSwiper />
      </div>
      {/* <div className="hidden lg:w-1/3 lg:flex xl:w-1/2">
        <div className={"bg-brown_uni bg-cover bg-center w-full h-full"}>
          <div className="h-full w-full bg-[#1d2d44]/50"></div>
        </div>
      </div> */}
    </>
  );
}

function CredentialsSwiper() {
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
        <ProfessionalPage />
      </SwiperSlide>
      <SwiperSlide className={"w-full h-full"}>
        <EducationPage />
      </SwiperSlide>
      <SwiperSlide className={"w-full h-full"}>
        <CertificationPage />
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
    <div className="flex flex-row gap-8 xl:gap-16 my-10 group w-1/2">
      <div className="hidden lg:flex w-32 h-32 overflow-hidden rounded-lg p-4 bg-white">
        <img
          className="h-full w-full object-center object-cover rounded-lg"
          src={imgUrl}
          alt="im"
          loading="lazy"
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
      <div className="flex flex-row w-full justify-between flex-wrap">
        <CredentialItem
          imgUrl={"./microsoft.png"}
          info={
            <div className="flex flex-col">
              <a
                href="https://www.microsoft.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-semibold inline-flex gap-2"
              >
                Microsoft{" "}
                <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                  <LinkIcon className="h-4 w-4" />
                </span>
              </a>
              <p className="text-md mb-2">Software Engineering Intern</p>
              <p className="text-md text-gray-300 mb-3">
                June 2024 - August 2024
              </p>
            </div>
          }
        />
        <CredentialItem
          imgUrl={"./quantguide.svg"}
          info={
            <div className="flex flex-col">
              <a
                href="https://www.quantguide.io/"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-semibold inline-flex gap-2"
              >
                QuantGuide{" "}
                <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                  <LinkIcon className="h-4 w-4" />
                </span>
              </a>
              <p className="text-md mb-2">Founding Engineer</p>
              <p className="text-md text-gray-300 mb-3">
                May 2023 - November 2023
              </p>
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
                rel="noreferrer"
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
            <div className="text-xl md:text-2xl font-semibold inline-flex gap-2">
              B-MIC{" "}
              <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                <LinkIcon className="h-4 w-4" />
              </span>
            </div>
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
              rel="noreferrer"
              className="text-xl md:text-2xl font-semibold inline-flex gap-2"
            >
              Entrepreneurship Program{" "}
              <span className="mt-auto mb-1.5 group-hover:opacity-100 opacity-0 duration-300">
                <LinkIcon className="h-4 w-4" />
              </span>
            </a>
            <p className="text-md mb-2">Tech Team Co-Leader, Member</p>
            <p className="text-md text-gray-300">October 2022 - May 2024</p>
          </div>
        }
      />
    </div>
  );
}

function CertificationPage() {
  return (
    <div className="h-full w-full flex flex-col px-16 mt-12">
      <p className="text-2xl md:text-4xl font-bold">Online Certifications</p>
      <div className="flex flex-row w-full justify-between flex-wrap">
        <CredentialItem
          imgUrl={"./ibm.webp"}
          info={
            <div className="flex flex-col w-1/2">
              <a
                href="https://coursera.org/share/1be6f256fc23a4c73d4ceff67b97abcf"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-semibold inline-flex gap-2"
              >
                Advanced Data Science with IBM{" "}
                <span className="my-auto group-hover:opacity-100 opacity-0 duration-300">
                  <LinkIcon className="h-4 w-4" />
                </span>
              </a>
              <p className="text-md text-gray-300 mb-3">
                <span className="text-gray-300 underline-none hidden xl:inline">
                  Completion on{" "}
                </span>{" "}
                <span className="xl:underline underline-offset-2">
                  March 2, 2021
                </span>
              </p>
            </div>
          }
        />
        <CredentialItem
          imgUrl={"./dlai.png"}
          info={
            <div className="flex flex-col w-1/2">
              <a
                href="https://coursera.org/share/3cebb7deaa635a3f666a04ab455744ee"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-semibold inline-flex gap-2"
              >
                Machine Learning Engineering for Production (MLOps){" "}
                <span className="my-auto group-hover:opacity-100 opacity-0 duration-300">
                  <LinkIcon className="h-4 w-4" />
                </span>
              </a>
              <p className="text-md text-gray-300 mb-3">
                <span className="text-gray-300 underline-none hidden xl:inline">
                  Completion on{" "}
                </span>{" "}
                <span className="xl:underline underline-offset-2">
                  January 11, 2023
                </span>
              </p>
            </div>
          }
        />
        <CredentialItem
          imgUrl={"./umich.png"}
          info={
            <div className="flex flex-col w-1/2">
              <a
                href="https://coursera.org/share/725f46dbb4a9614748e3b5c0d33302c0"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-semibold inline-flex gap-2"
              >
                Applied Data Science with Python{" "}
                <span className="my-auto group-hover:opacity-100 opacity-0 duration-300">
                  <LinkIcon className="h-4 w-4" />
                </span>
              </a>
              <p className="text-md text-gray-300 mb-3">
                <span className="text-gray-300 underline-none hidden xl:inline">
                  Completion on{" "}
                </span>{" "}
                <span className="xl:underline underline-offset-2">
                  January 21, 2021
                </span>
              </p>
            </div>
          }
        />
        <CredentialItem
          imgUrl={"./harvard.jpeg"}
          info={
            <div className="flex flex-col w-1/2">
              <a
                href="https://courses.edx.org/certificates/5a866da5951e4a2e9ec1f2ca9c5f62dc"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-semibold inline-flex gap-2"
              >
                CS50W: CS50's Web Programming{" "}
                <span className="my-auto group-hover:opacity-100 opacity-0 duration-300">
                  <LinkIcon className="h-4 w-4" />
                </span>
              </a>
              <p className="text-md text-gray-300 mb-3">
                <span className="text-gray-300 underline-none hidden xl:inline">
                  Completion on{" "}
                </span>{" "}
                <span className="xl:underline underline-offset-2">
                  January 11, 2021
                </span>
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}

// function CoursePopover() {
//   return (
//     <Popover className="relative">
//       {({ open }) => (
//         <>
//           <Popover.Button
//             className={`
//                 ${open ? "" : "text-opacity-90"}
//                 group inline-flex items-center rounded-md outline-none px-6 py-0.5 text-md bg-gray-600`}
//           >
//             <span>Relevant Courses</span>
//           </Popover.Button>
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-200"
//             enterFrom="opacity-0 translate-y-1"
//             enterTo="opacity-100 translate-y-0"
//             leave="transition ease-in duration-150"
//             leaveFrom="opacity-100 translate-y-0"
//             leaveTo="opacity-0 translate-y-1"
//           >
//             <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
//               <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                 foobar
//               </div>
//             </Popover.Panel>
//           </Transition>
//         </>
//       )}
//     </Popover>
//   );
// }

// function CredentialsBackgroundSwiper({
//   setControlledSwiper,
// }: {
//   setControlledSwiper: (f: any) => void;
// }) {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       className="w-full h-full duration-300"
//       onSwiper={setControlledSwiper}
//       modules={[EffectFade, Controller]}
//       effect={"fade"}
//       loop={true}
//     >
//       <SwiperSlide className={"bg-brown_uni bg-cover bg-center w-full h-full"}>
//         <div className="h-full w-full bg-[#1d2d44]/50"></div>
//       </SwiperSlide>
//       <SwiperSlide className={"bg-work bg-cover bg-center w-full h-full"}>
//         <div className="h-full w-full bg-[#1d2d44]/50"></div>
//       </SwiperSlide>
//       <SwiperSlide className={"bg-remote bg-cover bg-center w-full h-full"}>
//         <div className="h-full w-full bg-[#1d2d44]/50"></div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }

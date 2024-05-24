import { useState, useMemo, useRef, useEffect, useLayoutEffect } from "react";
import HomeSwiper from "../components/HomeSwiper";
import ProjectSwiper from "../components/ProjectSwiper";
import SocialPage from "../components/SocialPage";
import CredentialsPage from "../components/CredentialsPage";
import { Bars3Icon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { currentProjects, projectArchives, projects } from "../projects";
import HobbiesPage from "../components/HobbiesPage";
import ProjectFilter from "../components/ProjectFilter";

export default function Home() {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const [visiblePage, setVisiblePage] = useState<string>("Home");
  // const [scrollTimeout, setScrollTimeout] = useState<any>(null);

  const windowSize = useWindowSize();
  const [blockDisplay, setBlockDisplay] = useState<boolean>(false);

  const fullPageRef = useRef<HTMLDivElement>(null);

  // Page Refs and Visibility Hooks
  const homeRef = useRef<HTMLDivElement>(null);
  const homeVis = useOnScreen(homeRef);
  const currentProjectsRef = useRef<HTMLDivElement>(null);
  const currentProjectsVis = useOnScreen(currentProjectsRef);
  const pastProjectsRef = useRef<HTMLDivElement>(null);
  const pastProjectsVis = useOnScreen(pastProjectsRef);
  const credentialsRef = useRef<HTMLDivElement>(null);
  const credentialsVis = useOnScreen(credentialsRef);
  const hobbyRef = useRef<HTMLDivElement>(null);
  const hobbyVis = useOnScreen(hobbyRef);
  const connectRef = useRef<HTMLDivElement>(null);
  const connectVis = useOnScreen(connectRef);
  const archiveRef = useRef<HTMLDivElement>(null);
  const archiveVis = useOnScreen(archiveRef);

  const refMap: { [key: string]: React.RefObject<HTMLDivElement> } =
    useMemo(() => {
      return {
        Home: homeRef,
        "Current Projects": currentProjectsRef,
        "Past Highlights": pastProjectsRef,
        Credentials: credentialsRef,
        Hobbies: hobbyRef,
        Socials: connectRef,
        Archive: archiveRef,
      };
    }, [
      homeRef,
      currentProjectsRef,
      pastProjectsRef,
      credentialsRef,
      hobbyRef,
      connectRef,
      archiveRef,
    ]);

  const visibilityMap: { [key: string]: boolean } = useMemo(() => {
    return {
      Home: homeVis,
      "Current Projects": currentProjectsVis,
      "Past Highlights": pastProjectsVis,
      Credentials: credentialsVis,
      Hobbies: hobbyVis,
      Socials: connectVis,
      Archive: archiveVis,
    };
  }, [
    homeVis,
    currentProjectsVis,
    pastProjectsVis,
    credentialsVis,
    hobbyVis,
    connectVis,
    archiveVis,
  ]);

  const pageSequence: string[] = useMemo(() => {
    return [
      "Home",
      "Current Projects",
      "Past Highlights",
      "Credentials",
      "Socials",
      "Hobbies",
      "Archive",
    ];
  }, []);

  const checkSequence: string[] = useMemo(() => {
    return [
      "Home",
      "Current Projects",
      "Credentials",
      "Past Highlights",
      "Socials",
      "Hobbies",
      "Archive",
    ];
  }, []);

  useEffect(() => {
    checkSequence.forEach((page: string) => {
      if (visibilityMap[page]) {
        setVisiblePage(page);
      }
    });
  }, [visibilityMap, checkSequence]);

  useEffect(() => {
    if (windowSize[0] < 1024) {
      setBlockDisplay(true);
    } else {
      setBlockDisplay(false);
    }
  }, [windowSize]);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setTimeout(() => setSidebarState(true), 1500);
      setTimeout(() => setSidebarState(false), 3500);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  // useEffect(() => {
  //   if (fullPageRef.current == null) {
  //     return;
  //   }
  //   // Scroll listener
  //   fullPageRef.current.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // return a cleanup function to unregister our function since it will run multiple times
  //     fullPageRef.current?.removeEventListener("scroll", handleScroll);
  //   };
  // }, [fullPageRef]);

  // function handleScroll() {
  //   console.log(sidebarState);
  //   if (scrollTimeout) {
  //     //if there is already a timeout in process cancel it
  //     clearTimeout(scrollTimeout);
  //   }
  //   setScrollTimeout(
  //     setTimeout(() => {
  //       setScrollTimeout(null);
  //       setSidebarState(false);
  //     }, 1000)
  //   );
  //   if (!sidebarState) {
  //     setSidebarState(true);
  //   }
  // }

  function onScrollToRef(ref: React.MutableRefObject<HTMLDivElement | null>) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }

  if (blockDisplay) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center text-white/70">
        <WrenchScrewdriverIcon className="h-40 w-40" />
        <p className="text-2xl font-bold flex md:hidden">
          Constructing Phone view,
        </p>
        <p className="text-2xl font-bold hidden md:flex">
          Tablet and Phone view under construction,
        </p>
        <p className="text-2xl font-bold">Please view on Desktop!</p>
      </div>
    );
  }

  return (
    <div
      ref={fullPageRef}
      className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory relative bg-transparent"
    >
      <div
        className="fixed top-8 right-8 z-30"
        onMouseEnter={() => setSidebarState(true)}
      >
        <Bars3Icon className="h-12 w-12 cursor-pointer" />
      </div>
      <div
        className={
          "fixed pt-40 bg-black/70 top-0 right-0 w-[20vw] h-screen duration-300 flex flex-col justify-start gap-6 pl-16 " +
          (sidebarState ? " z-20 opacity-100" : " -z-10 opacity-0")
        }
        onMouseLeave={() => setSidebarState(false)}
      >
        {pageSequence.map((page: string) => {
          return (
            <p
              className={
                "cursor-pointer duration-300 underline-offset-4 hover:opacity-100 " +
                (visiblePage !== page ? "opacity-50" : " underline ")
              }
              onClick={() => onScrollToRef(refMap[page])}
            >
              {page}
            </p>
          );
        })}
      </div>
      <div
        ref={homeRef}
        className="w-screen h-[120vh] bg-transparent snap-start snap-always bg-personal bg-cover bg-fixed -mb-[20vh]"
      >
        {/* <img
          src={"./personal_photo.jpeg"}
          className="w-screen h-[120%] absolute object-cover -z-10"
        /> */}
        <div className="w-screen h-full bg-[#0D1321]/50 pb-[20vh]">
          <div className="flex flex-col h-5/6 mr-auto justify-end xl:justify-center ml-16 pt-12 text-gray-600 gap-0">
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-row flex inline-flex pb-5 mix-blend-screen">
              Hello World!
            </div>
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-col md:flex-row flex inline-flex md:gap-4 pb-5 lg:pl-12">
              <span className="inline md:hidden mix-blend-screen">
                My name is{" "}
              </span>
              <span className="hidden md:inline mix-blend-screen">I'm </span>
              <p className="text-[#599BFF] brightness-110">Nuo Wen Lei</p>
            </div>
            <div className="mix-blend-screen font-bold text-4xl md:text-5xl lg:text-6xl flex-col md:flex-row flex md:inline-flex md:gap-4 h-16 lg:pl-24 mb-5 md:mb-0 lg:mb-5">
              <span className="inline">I bring</span>

              <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-[#12cafc] to-[#f1a2fa] to-70%">
                Ideas to Life
              </span>
            </div>
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex-col md:flex-row flex md:inline-flex md:gap-4 lg:pl-36">
              <span className="inline mix-blend-screen">with</span>
              <div className="h-32 md:h-16 overflow-hidden">
                <HomeSwiper />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={currentProjectsRef}
        className="w-full h-full flex flex-col snap-center px-12 gap-4 pt-8 bg-gradient-to-b from-transparent to-[#0D1321] to-[20vh] z-10"
      >
        <div className="text-gray-200 text-4xl md:text-6xl pl-4  w-full mt-4 font-semibold">
          Current Projects
        </div>
        <ProjectSwiper allProjects={currentProjects} />
      </div>
      <div
        ref={pastProjectsRef}
        className="relative z-10 w-full h-full flex flex-col snap-center px-12 gap-4 pt-8 bg-gradient-to-b to-transparent from-[#0D1321] from-[80vh]"
      >
        <div className="text-gray-200 text-4xl md:text-6xl pl-4  w-full mt-4 font-semibold">
          Past Highlights
        </div>
        <ProjectSwiper allProjects={projects} />
      </div>
      <div
        ref={credentialsRef}
        className="relative w-screen h-[140vh] snap-center bg-brown_uni bg-cover bg-fixed -my-[20vh] z-0"
      >
        {/* <img
          src={"./brown_uni.jpeg"}
          className="w-screen h-[140%] absolute object-cover -z-20 -top-[20%]"
        /> */}
        <div className="w-full h-full flex flex-row bg-[#0D1321]/80 py-[20vh]">
          <CredentialsPage />
        </div>
      </div>
      <div
        ref={connectRef}
        className="relative w-full h-full flex flex-col snap-center px-12 gap-4 pt-8 bg-gradient-to-b from-transparent to-[#0D1321] to-[20vh] z-10"
      >
        <div className="text-gray-200 text-4xl md:text-6xl pl-4 w-full mt-4 font-semibold">
          Connect With Me!
        </div>
        <SocialPage />
      </div>
      <div
        ref={hobbyRef}
        className="relative z-0 w-full h-[120vh] flex flex-col snap-start bg-[#0D1321] px-12 gap-4 pt-8 -mb-[20vh]"
      >
        <div className="text-gray-200 text-4xl md:text-6xl pl-4  w-full mt-4 font-semibold">
          Hobbies
        </div>
        <HobbiesPage />
      </div>
      <div
        ref={archiveRef}
        className="relative z-10 w-full h-fit pb-20 flex flex-col snap-center px-12 gap-4 pt-8 bg-gradient-to-b from-transparent via-[#0D1321]/80 via-[5vh] to-[#0D1321] to-[8vh]"
      >
        <div className="text-gray-200 text-4xl md:text-6xl pl-4  w-full mt-4 font-semibold">
          Project Archives
        </div>
        <ProjectFilter projects={projectArchives} />
      </div>
    </div>
  );
}

export function useOnScreen(ref: React.RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      ),
    []
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, observer]);

  return isIntersecting;
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

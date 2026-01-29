import { ReactComponent as GitHub } from "../components/github.svg";
import { ReactComponent as Gmail } from "../components/gmail.svg";
import { ReactComponent as Discord } from "../components/discord.svg";
import { ReactComponent as Instagram } from "../components/instagram.svg";
import { ReactComponent as LinkedIn } from "../components/linkedin_colored.svg";
import { ReactComponent as Clip } from "../components/copy.svg";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function SocialPage() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      <div className="flex flex-col lg:flex-row gap-8 my-auto items-start">
        <SocialLink
          icon={<LinkedIn className="h-full w-full" />}
          info={"/nuo-wen-lei/"}
          link="https://www.linkedin.com/in/nuo-wen-lei/"
        />
        <SocialLink
          icon={<GitHub className="h-full w-full" />}
          info={"NuoWenLei"}
          link="https://github.com/NuoWenLei"
        />
        <Social
          icon={<Gmail className="h-full w-full" />}
          info={"nuowen0612"}
          clip={"nuowen0612@gmail.com"}
        />
        <Social
          icon={<Discord className="h-full w-full" />}
          info={"nothingness0308"}
          clip="nothingness0308"
        />
        <Social
          icon={<Instagram className="h-full w-full" />}
          info={"@nuowenlei"}
          clip="@nuowenlei"
        />
      </div>
    </div>
  );
}

interface SocialProps {
  icon: any;
  info: string;
  link?: string;
  clip?: string;
}

function Social({ icon, info, clip }: SocialProps) {
  return (
    <button
      type="button"
      onClick={() => clip && navigator.clipboard.writeText(clip)}
      className="relative flex flex-row gap-8 group duration-300 w-20 h-20 lg:w-32 lg:h-32 hover:w-1/2 lg:hover:w-1/3 lg:mx-auto rounded-lg overflow-hidden bg-white"
    >
      <div className="z-10 bg-white static w-20 h-20 lg:h-32 lg:w-32 p-4 duration-300 ">
        {icon}
      </div>
      <div className="absolute inline-block opacity-0 group-hover:opacity-100 duration-150 inset-0 text-right pr-4 text-[#1d2d44] font-bold text-md xl:text-2xl flex flex-col justify-center">
        <div className="flex flex-row justify-end">
          {info}
          <span className="h-8 w-8 p-1 rounded-full bg-gray-300 ml-2">
            <Clip fill="black" className="h-full w-full" />
          </span>
        </div>
      </div>
    </button>
  );
}

function SocialLink({ icon, info, link }: SocialProps) {
  return (
    <a
      href={link ? link : "#"}
      target={link ? "_blank" : "_self"}
      rel="noreferrer"
      className="relative flex flex-col lg:flex-row gap-8 group duration-300 w-20 h-20 lg:w-32 lg:h-32 hover:w-1/2 lg:hover:w-1/3 lg:mx-auto rounded-lg overflow-hidden bg-white"
    >
      <div className="z-10 bg-white static w-20 h-20 lg:h-32 lg:w-32 p-4 duration-300 ">
        {icon}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 duration-150 inset-0 text-right pr-4 text-[#1d2d44] font-bold text-md xl:text-2xl flex flex-col justify-center">
        <div className="flex flex-row justify-end">
          {info}
          <span className="h-8 w-8 p-1 rounded-full bg-gray-300 ml-2">
            <LinkIcon className="h-full w-full" />
          </span>
        </div>
      </div>
    </a>
  );
}

import { ReactComponent as GitHub } from "../components/github.svg";
import { ReactComponent as Gmail } from "../components/gmail.svg";
import { ReactComponent as Discord } from "../components/discord.svg";
import { ReactComponent as Instagram } from "../components/instagram.svg";
import { ReactComponent as LinkedIn } from "../components/linkedin_colored.svg";

export default function SocialPage() {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-row gap-8 my-auto">
        <Social
          icon={<LinkedIn className="h-full w-full" />}
          info={"/nuo-wen-lei/"}
        />
        <Social
          icon={<GitHub className="h-full w-full" />}
          info={"NuoWenLei"}
        />
        <Social
          icon={<Gmail className="h-full w-full" />}
          info={"nuowen0612"}
        />
        <Social
          icon={<Discord className="h-full w-full" />}
          info={"nothingness0308"}
        />
        <Social
          icon={<Instagram className="h-full w-full" />}
          info={"@nuowenlei"}
        />
      </div>
    </div>
  );
}

interface SocialProps {
  icon: any;
  info: string;
}

function Social({ icon, info }: SocialProps) {
  return (
    <div className="relative flex flex-row gap-8 group duration-300 w-32 hover:w-1/3 mx-auto rounded-lg overflow-hidden bg-white">
      <div className="z-20 bg-white static h-32 w-32 p-4 duration-300 ">
        {icon}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 duration-150 inset-0 text-right pr-4 text-[#1d2d44] font-bold text-md xl:text-2xl flex flex-col justify-center">
        {info}
      </div>
    </div>
  );
}

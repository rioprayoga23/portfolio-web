import Image from "next/image";
import Link from "next/link";

//* data
import { navbar_data } from "@/data/navbar";

//* images
import {
  GithubIcon,
  GithubWhiteIcon,
  MoonIcon,
  SunIcon,
} from "@/configs/images";

const MenuWeb = ({ theme, setTheme, asPath, active }) => {
  return (
    <div className="hidden md:flex items-center gap-5">
      {navbar_data.map((item, index) => (
        <Link
          href={item.link}
          className={`font-semibold mt-1 ${
            theme === "garden"
              ? "border-purple-700 hover:text-purple-700"
              : "border-[#fcb404] hover:text-[#fcb404]"
          } ${asPath === item.link && active === item.link && "border-b-2"}`}
          key={index}
        >
          {item.name}
        </Link>
      ))}

      <Link href="#" className="flex items-center font-semibold mt-1">
        <Image
          src={theme === "garden" ? GithubIcon : GithubWhiteIcon}
          alt="github icon"
          width={25}
          height={25}
          className="flex-shrink-0"
        />
        <span>Source</span>
      </Link>
      <button onClick={() => setTheme(theme === "garden" ? "dark" : "garden")}>
        <Image
          src={theme === "garden" ? MoonIcon : SunIcon}
          alt="theme icon"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};

export default MenuWeb;

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

//* data
import { navbar_data } from "@/data/navbar";

//* images
import {
  GithubIcon,
  GithubWhiteIcon,
  MoonIcon,
  SunIcon,
} from "@/configs/images";
import { setTheme } from "@/redux/themes/action";

const MenuWeb = ({ asPath, active }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  const dispatch = useDispatch();

  return (
    <div className="hidden md:flex items-center gap-5">
      {navbar_data.slice(0, navbar_data.length - 1).map((item, index) => (
        <Link
          href={item.link}
          className={`font-semibold mt-1 ${
            isActiveTheme === "garden"
              ? "border-purple-700 hover:text-purple-700"
              : "border-[#fcb404] hover:text-[#fcb404]"
          } ${asPath === item.link && active === item.link && "border-b-2"}`}
          key={index}
        >
          {item.name}
        </Link>
      ))}

      <Link
        href="https://github.com/rioprayoga23"
        target="_blank"
        className="flex items-center font-semibold mt-1"
      >
        <Image
          src={isActiveTheme === "garden" ? GithubIcon : GithubWhiteIcon}
          alt="github icon"
          width={25}
          height={25}
          className="flex-shrink-0"
        />
        <span
          className={`${
            isActiveTheme === "garden"
              ? "border-purple-700 hover:text-purple-700"
              : "border-[#fcb404] hover:text-[#fcb404]"
          }`}
        >
          Source
        </span>
      </Link>
      <button
        onClick={() =>
          dispatch(setTheme(isActiveTheme === "dark" ? "garden" : "dark"))
        }
      >
        <Image
          src={isActiveTheme === "garden" ? MoonIcon : SunIcon}
          alt="theme icon"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};

export default MenuWeb;

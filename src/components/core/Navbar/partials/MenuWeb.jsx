import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

//* data
import { navbar_data } from "@/data/navbar";

//* images
import { GithubWhiteIcon, OwlIcon, WolfIcon } from "@/configs/images";
import { setTheme } from "@/redux/themes/action";

const MenuWeb = ({ active }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  const dispatch = useDispatch();

  return (
    <div className="hidden md:flex items-center gap-5">
      {navbar_data.slice(0, navbar_data.length - 1).map((item, index) => (
        <Link
          href={item.link}
          shallow={true}
          className={`font-semibold mt-1 ${
            isActiveTheme === "black"
              ? "border-[#fcb404] hover:text-[#fcb404]"
              : "border-purple-700 hover:text-purple-700"
          } ${
            (active === item.link ||
              (active.includes("?") && item.link !== "/")) &&
            "border-b-2"
          }`}
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
          src={isActiveTheme === "black" ? GithubWhiteIcon : GithubWhiteIcon}
          alt="github icon"
          width={25}
          height={25}
          className="flex-shrink-0"
        />
        <span
          className={`${
            isActiveTheme === "black"
              ? "border-[#fcb404] hover:text-[#fcb404]"
              : "border-purple-700 hover:text-purple-700"
          }`}
        >
          Source
        </span>
      </Link>
      <button
        className="flex items-center"
        onClick={() =>
          dispatch(setTheme(isActiveTheme === "dark" ? "black" : "dark"))
        }
      >
        <Image
          src={isActiveTheme === "black" ? OwlIcon : WolfIcon}
          alt="theme icon"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};

export default MenuWeb;

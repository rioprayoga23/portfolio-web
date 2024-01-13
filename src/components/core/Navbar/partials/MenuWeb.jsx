import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

//* data
import { navbar_data } from "@/data/navbar";

//* images
import { GithubWhiteIcon, OwlIcon, WolfIcon } from "@/configs/images";
import { setTheme } from "@/redux/themes/action";
import { useEffect, useState } from "react";

const MenuWeb = ({ asPath, active }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);
  // const [audioFile, setAudioFile] = useState("/audio/owl.mp3");

  const dispatch = useDispatch();

  // let audio = new Audio(audioFile);

  // useEffect(() => {
  //   setAudioFile(
  //     audioFile === "/audio/owl.mp3" ? "/audio/wolf.mp3" : "/audio/owl.mp3"
  //   );
  // }, [isActiveTheme]);

  return (
    <div className="hidden md:flex items-center gap-5">
      {navbar_data.slice(0, navbar_data.length - 1).map((item, index) => (
        <Link
          href={item.link}
          className={`font-semibold mt-1 ${
            isActiveTheme === "black"
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
          src={isActiveTheme === "black" ? GithubWhiteIcon : GithubWhiteIcon}
          alt="github icon"
          width={25}
          height={25}
          className="flex-shrink-0"
        />
        <span
          className={`${
            isActiveTheme === "black"
              ? "border-purple-700 hover:text-purple-700"
              : "border-[#fcb404] hover:text-[#fcb404]"
          }`}
        >
          Source
        </span>
      </Link>
      <button
        onClick={() => {
          dispatch(setTheme(isActiveTheme === "dark" ? "black" : "dark"));
          // audio.play();
        }}
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

import { useTheme } from "next-themes";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

//* images
import {
  GithubIcon,
  GithubWhiteIcon,
  MoonIcon,
  SunIcon,
} from "@/configs/images";
import { useRouter } from "next/router";
import MenuIcon from "./partials/MenuIcon";
import { useEffect, useRef } from "react";

//* font
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const { asPath } = useRouter();
  const { theme, setTheme } = useTheme();

  const closeDropdown = (e) => {
    e.preventDefault();
    e.target.blur();
  };

  return (
    <nav className="navbar flex w-full sticky top-0 z-30 p-3 items-center drop-shadow-xl backdrop-blur-md justify-center">
      <div className="container md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <div className="flex flex-1 items-center gap-5">
          <Link
            href="/"
            className={`text-3xl font-bold me-5 border-[#fcb404] hover:text-[#fcb404] ${
              caveat.className
            } ${
              theme == "garden"
                ? "border-[#fcb404] hover:text-[#fcb404]"
                : "border-purple-700 hover:text-purple-700"
            }`}
          >
            Rio Prayoga
          </Link>
        </div>

        {/* web mode */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/"
            className={`font-semibold mt-1 ${
              theme === "garden"
                ? "border-purple-700 hover:text-purple-700"
                : "border-[#fcb404] hover:text-[#fcb404]"
            } ${asPath == "/" && "border-b-2"}`}
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className={`font-semibold mt-1 ${
              theme === "garden"
                ? "border-purple-700 hover:text-purple-700"
                : "border-[#fcb404] hover:text-[#fcb404]"
            } ${asPath == "/portfolio" && "border-b-2"}`}
          >
            Portfolio
          </Link>

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
          <button
            onClick={() => setTheme(theme === "garden" ? "dark" : "garden")}
          >
            <Image
              src={theme === "garden" ? MoonIcon : SunIcon}
              alt="theme icon"
              width={25}
              height={25}
            />
          </button>
        </div>

        {/* mobile mode */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "garden" ? "dark" : "garden")}
          >
            <Image
              src={theme === "garden" ? MoonIcon : SunIcon}
              alt="theme icon"
              width={25}
              height={25}
            />
          </button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <MenuIcon />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu px-5 shadow bg-base-100 rounded-box w-52 mt-2"
            >
              <Link
                href="/"
                className={`font-semibold my-1 ${
                  asPath == "/" &&
                  (theme === "garden" ? "text-purple-700" : " text-[#fcb404]")
                }`}
                onClick={closeDropdown}
              >
                About
              </Link>

              <Link
                href="/portfolio"
                className={`font-semibold my-1 ${
                  asPath == "/portfolio" &&
                  (theme === "garden" ? "text-purple-700" : " text-[#fcb404]")
                }`}
                onClick={closeDropdown}
              >
                Portfolio
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

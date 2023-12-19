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

//* font
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar flex w-full sticky top-0 z-30 p-3 items-center drop-shadow-xl backdrop-blur-md justify-center">
      <div className="container md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <div className="flex flex-1 items-center gap-5">
          <Link
            href="/"
            className={`text-3xl font-bold me-5 ${caveat.className}`}
          >
            Rio Prayoga
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link href="#" className="font-semibold mt-1">
            About
          </Link>

          <Link href="#" className="font-semibold mt-1">
            Portfolio
          </Link>

          <Link href="#" className="flex items-center font-semibold mt-1">
            <Image
              src={theme === "cupcake" ? GithubIcon : GithubWhiteIcon}
              alt="github icon"
              width={25}
              height={25}
              className="flex-shrink-0"
            />
            <span>Source</span>
          </Link>
          <button
            className="mt-1"
            onClick={() => setTheme(theme === "garden" ? "dark" : "garden")}
          >
            <Image
              src={theme === "cupcake" ? MoonIcon : SunIcon}
              alt="theme icon"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

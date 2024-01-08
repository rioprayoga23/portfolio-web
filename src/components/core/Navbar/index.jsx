import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//* hooks
import { useTheme } from "next-themes";

//* components
import MenuMobile from "./partials/MenuMobile";
import MenuWeb from "./partials/MenuWeb";

//* font
import { Caveat } from "next/font/google";
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [active, setActive] = useState("");
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();

  useEffect(() => setActive(asPath), [asPath]);

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

        {/* Mobile mode */}
        <MenuMobile theme={theme} asPath={asPath} setTheme={setTheme} />

        {/* Web mode */}
        <MenuWeb
          theme={theme}
          asPath={asPath}
          setTheme={setTheme}
          active={active}
        />
      </div>
    </nav>
  );
};

export default Navbar;

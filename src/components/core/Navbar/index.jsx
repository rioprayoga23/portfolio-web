import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//* components
import MenuMobile from "./partials/MenuMobile";
import MenuWeb from "./partials/MenuWeb";

//* font
import { Caveat } from "next/font/google";
import { useSelector } from "react-redux";
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  const [active, setActive] = useState("");
  const { asPath } = useRouter();

  useEffect(() => setActive(asPath), [asPath]);

  return (
    <nav className="navbar flex w-full sticky top-0 z-30 p-3 items-center drop-shadow-xl backdrop-blur-md justify-center">
      <div className="container md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <div className="flex flex-1 items-center gap-5">
          <Link
            href="/"
            className={`text-3xl font-bold me-5 ${caveat.className} ${
              isActiveTheme == "black" ? "text-[#fcb404]" : " text-purple-700"
            }`}
          >
            Rio Prayoga
          </Link>
        </div>

        {/* Mobile mode */}
        <MenuMobile asPath={asPath} />

        {/* Web mode */}
        <MenuWeb asPath={asPath} active={active} />
      </div>
    </nav>
  );
};

export default Navbar;

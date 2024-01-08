import Image from "next/image";
import Link from "next/link";

//* data
import { navbar_data } from "@/data/navbar";

//* components
import MenuIcon from "./MenuIcon";

// * images
import { MoonIcon, SunIcon } from "@/configs/images";

const MenuMobile = ({ theme, setTheme, asPath }) => {
  const closeDropdown = (e) => {
    e.preventDefault();
    e.target.blur();
  };

  return (
    <div className="flex md:hidden items-center gap-2">
      <button onClick={() => setTheme(theme === "garden" ? "dark" : "garden")}>
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
          {navbar_data.map((item, index) => (
            <Link
              href={item.link}
              className={`font-semibold my-1 ${
                asPath === item.link &&
                (theme === "garden" ? "text-purple-700" : " text-[#fcb404]")
              }`}
              onClick={closeDropdown}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;

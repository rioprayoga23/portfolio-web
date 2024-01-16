import Image from "next/image";

//* data
import { navbar_data } from "@/data/navbar";

//* components
import MenuIcon from "./MenuIcon";

// * images
import { OwlIcon, WolfIcon } from "@/configs/images";

//* redux
import { setTheme } from "@/redux/themes/action";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const MenuMobile = ({ active }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleClick = (e) => {
    e.target.blur();
  };

  return (
    <div className="flex md:hidden items-center gap-2">
      <button
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

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <MenuIcon />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu px-5 shadow bg-neutral w-52 mt-2 rounded-2xl"
        >
          {navbar_data.map((item, index) => (
            <Link
              tabIndex={0}
              href={item.link}
              onClick={(e) => e.target.blur()}
              target={`${item.name === "Source" ? "_blank" : ""}`}
              shallow={true}
              className={`font-semibold my-1 w-fit ${
                (active === item.link ||
                  (active.includes("?") &&
                    item.link !== "/" &&
                    item.name !== "Source")) &&
                `${
                  isActiveTheme === "black"
                    ? "text-[#fcb404] hover:text-[#fcb404]"
                    : "text-purple-700 hover:text-purple-700"
                }`
              }`}
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

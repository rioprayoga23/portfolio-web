import Image from "next/image";
import Link from "next/link";

//* data
import { navbar_data } from "@/data/navbar";

//* components
import MenuIcon from "./MenuIcon";

// * images
import { OwlIcon, WolfIcon } from "@/configs/images";

//* redux
import { setTheme } from "@/redux/themes/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const MenuMobile = ({ asPath }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleClick = (link, e) => {
    push(link);
    e.preventDefault();
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
          className="dropdown-content z-[1] menu px-5 shadow bg-base-100 rounded-box w-52 mt-2"
        >
          {navbar_data.map((item, index) => (
            <div
              tabIndex={0}
              href={item.link}
              className={`font-semibold my-1 ${
                asPath === item.link &&
                (isActiveTheme === "black"
                  ? "text-purple-700"
                  : " text-[#fcb404]")
              }`}
              key={index}
              onClick={(e) => handleClick(item?.link, e)}
            >
              {item.name}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;

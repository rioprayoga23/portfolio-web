import Link from "next/link";
import { useSelector } from "react-redux";

//* data
import { navbar_data } from "@/data/navbar";

const MenuWeb = ({ active }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RIO_PRAYOGA_TEJA_PUTRA_CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hidden md:flex items-center gap-5">
      {navbar_data.slice(0, navbar_data.length - 1).map((item, index) => (
        <Link
          href={item.link}
          shallow={true}
          className={`font-semibold mt-1 ${
            isActiveTheme === "black"
              ? "border-[#fcb404] hover:text-[#fcb404]"
              : "border-success hover:text-success"
          } ${
            (active === item.link ||
              (active.includes("?") && item.link !== "/")) &&
            `border-b-2 ${
              isActiveTheme === "black" ? "text-[#fcb404]" : "text-success"
            }`
          }`}
          key={index}
        >
          {item.name}
        </Link>
      ))}

      <button
        onClick={handleDownload}
        className={`font-semibold mt-1 flex items-center gap-2 ${
          isActiveTheme === "black"
            ? "border-[#fcb404] hover:text-[#fcb404]"
            : "border-success hover:text-success"
        } ${
          active === "/my-cv" &&
          `border-b-2 ${
            isActiveTheme === "black" ? "text-[#fcb404]" : "text-success"
          }`
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        Resume
      </button>

      {/* <Link
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
              : "border-purple-700 hover:text-success"
          }`}
        >
          Source
        </span>
      </Link> */}
      {/* <button
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
      </button> */}
    </div>
  );
};

export default MenuWeb;

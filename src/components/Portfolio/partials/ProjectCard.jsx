import CImage from "@/components/core/Image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProjectCard = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);
  const { push } = useRouter();

  return (
    <div
      className={`card card-compact shadow-2xl rounded-2xl overflow-hidden cursor-pointer  md:hover:shadow-3xl ${
        isActiveTheme === "black"
          ? "md:hover:shadow-[#fcb404]/70"
          : "md:hover:shadow-success/70"
      }`}
      onClick={() => push({ pathname: "/portfolio", query: { q: "movie" } })}
    >
      <figure className="w-full h-[190px] sm:h-[150px] md:h-[170px] relative">
        <CImage
          src={
            "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          className="object-cover"
          layout="fill"
        />
      </figure>
      <div className="p-3 bg-neutral">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">Shoes!</h2>
          <span
            className={`badge ${
              isActiveTheme == "black" ? "bg-[#fcb404]" : "badge-success"
            }  rounded-xl text-xs font-semibold text-neutral`}
          >
            Web
          </span>
        </div>
        <p className="text-sm">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

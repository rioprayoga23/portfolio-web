import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import CImage from "@/components/core/Image";

const ProjectCard = ({ item }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);
  const { push } = useRouter();

  return (
    <div
      className={`card card-compact shadow-2xl rounded-2xl overflow-hidden cursor-pointer  md:hover:shadow-3xl ${
        isActiveTheme === "black"
          ? "md:hover:shadow-[#fcb404]/70"
          : "md:hover:shadow-success/70"
      }`}
      onClick={() => push({ pathname: "/portfolio", query: { q: item.slug } })}
    >
      <figure className="w-full h-[190px] sm:h-[150px] md:h-[170px] relative">
        <CImage src={item.img} alt="" className="object-cover" layout="fill" />
      </figure>
      <div className="p-3 bg-neutral h-24">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold truncate">{item.name}</h2>
          <span
            className={`badge ${
              isActiveTheme == "black" ? "bg-[#fcb404]" : "badge-success"
            }  rounded-xl text-xs font-semibold text-neutral`}
          >
            Web
          </span>
        </div>
        <p className="text-sm line-clamp-2">{item.short_description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import CImage from "@/components/core/Image";
import { useTheme } from "@emotion/react";

const ProjectCard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full rounded-xl overflow-hidden cursor-pointer mb-5 ${
        theme == "garden"
          ? "hover:bg-zinc-300 transition-colors duration-300 ease-in-out"
          : "hover:bg-slate-800 transition-colors duration-300 ease-in-out"
      }  p-3`}
    >
      <div className="w-full h-[190px] sm:h-[150px] md:h-[170px] relative">
        <CImage
          src={""}
          alt=""
          className="rounded-xl object-cover"
          layout="fill"
          h={0}
          w={0}
        />
      </div>
      <h1 className="font-extrabold text-lg mt-2 line-clamp-2 underline">
        Movie App
      </h1>
      <p className="line-clamp-4 text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsum
        dignissimos deserunt quod reprehenderit totam molestiae ducimus
        voluptatibus. Facilis provident architecto quidem assumenda quis
        suscipit sapiente rerum neque corrupti nesciunt!
      </p>
    </div>
  );
};

export default ProjectCard;

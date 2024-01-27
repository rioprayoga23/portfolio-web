import CImage from "@/components/core/Image";
import { useRouter } from "next/router";

const ProjectCard = () => {
  const { push } = useRouter();

  return (
    <div
      className={`w-full rounded-xl overflow-hidden cursor-pointer mb-5 p-3 hover:bg-neutral hover:backdrop-blur-3xl`}
      onClick={() =>
        push({ pathname: "/portfolio", query: { q: "movie" }, slashes: "/" })
      }
    >
      <div className="w-full h-[190px] sm:h-[150px] md:h-[170px] relative">
        <CImage
          src={
            "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          className="rounded-xl object-cover"
          layout="fill"
          h={0}
          w={0}
        />
      </div>
      <h1 className="line-clamp-2 text-lg font-extrabold mt-2 underline">
        Movie App Movie App Movie App Movie App Movie App
      </h1>
      <p className="line-clamp-4 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsum
        dignissimos deserunt quod reprehenderit totam molestiae ducimus
        voluptatibus. Facilis provident architecto quidem assumenda quis
        suscipit sapiente rerum neque corrupti nesciunt!
      </p>
    </div>
  );
};

export default ProjectCard;

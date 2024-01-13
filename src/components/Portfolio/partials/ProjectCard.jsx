import CImage from "@/components/core/Image";
import { useSelector } from "react-redux";

const ProjectCard = ({ ref }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div
      className={`w-full rounded-xl overflow-hidden cursor-pointer mb-5 ${
        isActiveTheme == "black" ? "hover:bg-neutral" : "hover:bg-neutral"
      }  p-3`}
      onClick={openModal}
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

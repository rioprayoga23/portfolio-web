import { Fragment } from "react";
import { useSelector } from "react-redux";

//* components
import CTitle from "@/components/core/Title";
import ProjectCard from "../partials/ProjectCard";
import SectionLayout from "@/components/core/Layout/SectionLayout";

const Portfolios = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <SectionLayout>
      <CTitle name="Projects I've Built" />

      <p>
        Every project presents a{" "}
        <span
          className={`font-bold ${
            isActiveTheme == "black" ? "text-[#fcb404]" : "text-success"
          }`}
        >
          challenge
        </span>
        , offering an opportunity to acquire new{" "}
        <span
          className={`font-bold ${
            isActiveTheme == "black" ? "text-[#fcb404]" : "text-success"
          }`}
        >
          {" "}
          knowledge
        </span>
        .
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 mt-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Portfolios;

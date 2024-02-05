import { Fragment } from "react";

//* components
import CTitle from "@/components/core/Title";
import ProjectCard from "../partials/ProjectCard";

const Portfolios = () => {
  return (
    <Fragment>
      <CTitle name="Project I've Built" />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default Portfolios;

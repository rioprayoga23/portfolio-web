import { Fragment, useRef, useState } from "react";
import dynamic from "next/dynamic";

//* components
import CTitle from "@/components/core/Title";
import ProjectCard from "../partials/ProjectCard";
import Image from "next/image";
import CImage from "@/components/core/Image";

const CModal = dynamic(() => import("@/components/core/Modal"), {
  ssr: false,
});

const Portfolios = () => {
  const [tempData, setTempData] = useState({});

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

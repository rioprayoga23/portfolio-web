import CImage from "@/components/core/Image";
import React from "react";

const Skill = ({ src, alt, name }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-1">
      <div className="flex justify-center items-center bg-slate-800 rounded-full w-[73px] h-[73px]">
        <div>
          <CImage
            src={src}
            alt={alt}
            className={"flex-shrink-0 w-[30px] md:w-[35px]"}
            // w={35}
            // h={35}
          />
        </div>
      </div>
      <p className="font-bold text-sm text-center">{name}</p>
    </section>
  );
};

export default Skill;

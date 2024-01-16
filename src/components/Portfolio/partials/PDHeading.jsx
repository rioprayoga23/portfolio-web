import React from "react";
import { useSelector } from "react-redux";

const PDHeading = ({ title, children }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <div className="flex gap-2">
      <h2
        className={`bg-neutral px-1 font-bold flex-shrink-0 h-fit ${
          isActiveTheme == "black" ? "text-[#fcb404]" : " text-purple-700"
        }`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default PDHeading;

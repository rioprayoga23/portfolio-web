import React from "react";

const SectionLayout = ({ children }) => {
  return <section className="mt-10 lg:mt-10">{<div>{children}</div>}</section>;
};

export default SectionLayout;

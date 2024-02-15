import React from "react";

const SectionLayout = ({ children, className }) => {
  return (
    <section className={`mt-10 lg:mt-10 ${className}`}>
      {<div>{children}</div>}
    </section>
  );
};

export default SectionLayout;

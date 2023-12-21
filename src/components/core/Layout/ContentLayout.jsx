import React from "react";
import About from "../../About";

const ContentLayout = () => {
  return (
    <section className="relative z-10 mx-auto w-100 md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] px-5 mt-[200px] md:mt-[270px] lg:mt-[300px] xl:mt-[350px] pb-24">
      <About />
    </section>
  );
};

export default ContentLayout;

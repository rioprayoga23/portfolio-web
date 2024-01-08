import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const About = dynamic(() => import("@/components/About"), {
  ssr: false,
});

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});

const ContentLayout = () => {
  const { asPath } = useRouter();

  const contentRender = () => {
    switch (asPath) {
      case "/":
        return <About />;
      case "/portfolio":
        return <Portfolio />;
    }
  };

  return (
    <section className="relative z-10 mx-auto w-100 md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] px-5 mt-[200px] md:mt-[270px] lg:mt-[300px] xl:mt-[350px] pb-24">
      {contentRender()}
    </section>
  );
};

export default ContentLayout;

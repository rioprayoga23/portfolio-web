import { Fragment } from "react";

//* component
import Bio from "./components/Bio";
import Experiences from "./components/Experiences";
import Heading from "./components/Heading";
import Headline from "./components/Headline";
import Skills from "./components/Skills";

const About = () => {
  return (
    <Fragment>
      <Headline />
      <section className="mt-7">
        {/* Heading */}
        <Heading />

        {/* Bio */}
        <Bio />

        {/* Experiences */}
        <Experiences />

        {/* skill */}
        <Skills />
      </section>
    </Fragment>
  );
};

export default About;

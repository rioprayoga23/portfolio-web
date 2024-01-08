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
      <Heading />
      <Bio />
      <Experiences />
      <Skills />
    </Fragment>
  );
};

export default About;

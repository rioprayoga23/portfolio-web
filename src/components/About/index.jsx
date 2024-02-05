import { Fragment } from "react";

//* component
import Bio from "./components/Bio";
import Educations from "./components/Educations";
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
      <Educations />
      <Skills />
    </Fragment>
  );
};

export default About;

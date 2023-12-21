import { Fragment } from "react";

//* component
import Bio from "./partials/Bio";
import Heading from "./partials/Heading";
import Headline from "./partials/Headline";
import SkillsExperiences from "./partials/SkillsExperiences";

const About = () => {
  return (
    <Fragment>
      <Headline />
      <section className="mt-7">
        {/* Heading */}
        <Heading />

        {/* Bio */}
        <Bio />

        {/* Skills & Experiences */}
        <SkillsExperiences />
      </section>
    </Fragment>
  );
};

export default About;

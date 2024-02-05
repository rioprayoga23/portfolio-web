//* data
import { skills_data } from "@/data/skills";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import Skill from "../partials/Skill";

const Skills = () => {
  return (
    <SectionLayout>
      <CTitle name={"Skills"} />

      {/* <Label
        title="I GOT THE EXPERIENCE. HERE IS MY TOOLBELT FOR SUCCESS. My App Development Toolbelt :"
        className="justify-start"
      /> */}

      {/* </h5> */}
      <div className="flex flex-wrap justify-center gap-5 sm:flex-none sm:grid sm:grid-cols-4 md:grid-cols-4 sm:gap-5 mt-5">
        {skills_data.map((item, index) => (
          <Skill src={item.icon} alt={item.alt} name={item.name} key={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;

//* data
import { skills_data } from "@/data/skills";

//* components
import Skill from "../partials/Skill";
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";

const Skills = () => {
  return (
    <SectionLayout>
      <CTitle name={"Skills"} />

      <h5 className="font-bold text-center mt-5">
        HERE IS MY TECH STACK FOR SUCCESS.
      </h5>

      <div className="flex flex-wrap justify-center gap-5 sm:flex-none sm:grid sm:grid-cols-4 md:grid-cols-4 sm:gap-5 mt-5">
        {skills_data.map((item, index) => (
          <Skill src={item.icon} alt={item.alt} name={item.name} key={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;

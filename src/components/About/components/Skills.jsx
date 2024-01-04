import { skills_data } from "@/data/skills";
import Skill from "../partials/Skill";
import CTitle from "@/components/core/Title";
import SectionLayout from "@/components/core/Layout/SectionLayout";

const Skills = () => {
  return (
    <SectionLayout>
      <CTitle name={"Skills"} />

      <h5 className="font-bold text-center mt-5">
        HERE IS MY TECH STACK FOR SUCCESS.
      </h5>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 mt-5">
        {skills_data.map((item, index) => (
          <Skill src={item.icon} alt={item.alt} name={item.name} key={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;

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

      {/* </h5> */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-5">
        {skills_data.map((item, index) => (
          <Skill src={item.icon} alt={item.alt} name={item.name} key={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;

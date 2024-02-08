//* data
import { skills_data } from "@/data/skills";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import Magnetic from "@/components/core/Magnetic";
import CTitle from "@/components/core/Title";
import Skill from "../partials/Skill";
import { Fragment } from "react";

const Skills = () => {
  return (
    <SectionLayout>
      <CTitle name={"Skills"} />

      {/* </h5> */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-5">
        {skills_data.map((item, index) => (
          <Fragment key={index}>
            <div className="hidden lg:block">
              <Magnetic>
                <Skill src={item.icon} alt={item.alt} name={item.name} />
              </Magnetic>
            </div>

            <div className="lg:hidden">
              <Skill src={item.icon} alt={item.alt} name={item.name} />
            </div>
          </Fragment>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;

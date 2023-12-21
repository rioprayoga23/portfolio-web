//* data
import { skills_data } from "@/data/skills";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import Experience from "./Experience";
import Skill from "./Skill";

const SkillsExperiences = () => {
  return (
    <SectionLayout>
      <section>
        <CTitle name={"Skills & Experiences"} />
        <Experience
          year={"2018"}
          role={"Fullstack Developer (Intership)"}
          company={"PT Cakrawala Global Informatika"}
        />
        <Experience
          year={"2020"}
          role={"Frontend Developer (Freelance)"}
          company={"Desaku Indonesia"}
        />
        <Experience
          year={"2023"}
          role={"Frontend Developer"}
          company={"PT Gebra Kreativa Global"}
        />

        <div>
          <h5 className="font-bold text-center mt-5">
            HERE IS MY TECH STACK FOR SUCCESS.
          </h5>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 mt-5">
            {skills_data.map((item, index) => (
              <Skill
                src={item.icon}
                alt={item.alt}
                name={item.name}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionLayout>
  );
};

export default SkillsExperiences;

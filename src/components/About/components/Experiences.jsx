//* data
import { experiencesData } from "@/data/experience";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import Experience from "../partials/Experience";

const Experiences = () => {
  return (
    <SectionLayout>
      <CTitle name={"Experiences"} />
      {experiencesData.map((item, index) => (
        <Experience
          year={item.year}
          role={item.role}
          company={item.company}
          key={index}
        />
      ))}
    </SectionLayout>
  );
};

export default Experiences;

//* data

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import { educationsData } from "@/data/education";
import TimelineItem from "../partials/TimelineItem";

const Educations = () => {
  return (
    <SectionLayout>
      <CTitle name={"Educations"} />
      {educationsData.map((item, index) => (
        <TimelineItem
          year={item.year}
          role={item.role}
          company={item.company}
          key={index}
        />
      ))}
    </SectionLayout>
  );
};

export default Educations;

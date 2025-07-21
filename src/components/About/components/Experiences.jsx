//* data
import { experiencesData } from "@/data/experience";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import TimelineItem from "../partials/TimelineItem";

const Experiences = () => {
  return (
    <SectionLayout>
      <CTitle name={"PROFESSIONAL EXPERIENCE"} />
      {experiencesData.map((item, index) => (
        <TimelineItem
          year={item.year}
          role={item.role}
          company={item.company}
          column={true}
          last={experiencesData.length - 1 === index}
          now={item.now}
          key={index}
        />
      ))}
    </SectionLayout>
  );
};

export default Experiences;

import Label from "@/components/core/Label";

const TimelineItem = ({ year, role, company }) => {
  return (
    <section className="text-start flex gap-4 pb-4">
      <Label title={year} />
      <div>
        <h3 className="font-bold">{role}</h3>
        <p className="m-0">{company}</p>
      </div>
    </section>
  );
};

export default TimelineItem;

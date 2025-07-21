import Label from "@/components/core/Label";
import { useSelector } from "react-redux";

const TimelineItem = ({ year, role, company, last, now }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <section className={`text-start ${!last && "pb-4"}`}>
      <div className="flex gap-4 items-start">
        <Label title={year} />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-bold">{role}</h3>
          </div>
          <p className="m-0">{company}</p>
        </div>
      </div>
    </section>
  );
};

export default TimelineItem;

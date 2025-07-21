import { useSelector } from "react-redux";
import { InfoIcon } from "@/configs/images";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";

const Bio = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <SectionLayout>
      <CTitle name={"About Me"} icon={InfoIcon} />
      <p className="indent-5">
        Results-driven and adaptable{" "}
        <span
          className={`font-bold ${
            isActiveTheme === "black" ? "text-[#fcb404]" : "text-success"
          }`}
        >
          Frontend Engineer
        </span>{" "}
        with 3+ years of experience in developing responsive and scalable web
        and mobile applications using React JS, Next JS, React Native,
        Typescript, and modern UI frameworks. Strong expertise in translating
        UI/UX design into high-quality, accessible, and performant interfaces.
        Proven track record working in startup and fast-paced environments,
        collaborating across teams to deliver end-to-end products. Always
        up-to-date with the latest frontend trends, tools, and best practices.
        Passionate about crafting seamless user experiences with clean and
        efficient code.
      </p>
    </SectionLayout>
  );
};

export default Bio;

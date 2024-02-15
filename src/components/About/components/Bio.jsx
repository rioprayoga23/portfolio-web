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
        Experienced as a{" "}
        <span
          className={`font-bold ${
            isActiveTheme == "black" ? "text-[#fcb404]" : "text-success"
          }`}
        >
          Frontend Developer
        </span>{" "}
        and proficient in developing JavaScript projects, including web and
        mobile applications, using ReactJS, Next JS, React Native and ExpressJS.
        Passionate about creating visually appealing and user interface
        friendly. Constantly updated with the latest tech technology.
        Experienced in working with startup and software house companies,
        adapting to fast-paced environments, and collaborating effectively with
        cross-functional teams.
      </p>
    </SectionLayout>
  );
};

export default Bio;

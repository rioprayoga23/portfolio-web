import CTitle from "@/components/core/Title";
import { InfoIcon } from "@/configs/images";

const Bio = () => {
  return (
    <section className="mt-10 lg:mt-0">
      <CTitle name={"About Me"} icon={InfoIcon} />
      <p className="indent-5">
        Experienced as a frontend developer and proficient in developing
        JavaScript projects, including web and mobile applications, using
        ReactJS, Next JS, React Native and ExpressJS. Passionate about creating
        visually appealing and user interface friendly. Constantly updated with
        the latest tech technology. Experienced in working with startup and
        software house companies, adapting to fast-paced environments, and
        collaborating effectively with cross-functional teams.
      </p>
    </section>
  );
};

export default Bio;

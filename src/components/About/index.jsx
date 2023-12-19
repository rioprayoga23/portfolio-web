import { Fragment } from "react";
import Heading from "./partials/Heading";
import Headline from "./partials/Headline";

const About = () => {
  return (
    <Fragment>
      <Headline />
      <section className="mt-7">
        {/* Heading */}
        <Heading />

        {/* Bio */}
        <div className="mt-10 lg:mt-0">
          <h2 className="text-xl font-bold underline mb-1">About Me</h2>
          <p className="text-gray-400 indent-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde
            consequatur aliquam dolor repellendus dignissimos a tempora,
            ducimus, aperiam in quam sequi neque inventore alias consectetur quo
            ex, perspiciatis hic. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Commodi quam iure tenetur impedit consequatur enim
            quaerat molestias quisquam, labore laudantium dolore suscipit unde
            facilis id magni dignissimos totam voluptate magnam?
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default About;

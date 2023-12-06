import { Fragment } from "react";
import Headline from "./partials/Headline";
import Image from "next/image";
import { IdIcon, Me } from "@/configs/images";

const About = () => {
  return (
    <Fragment>
      <Headline />
      <section className="mt-7">
        {/* Heading */}
        <div className="flex flex-col-reverse items-center md:items-start md:flex-row">
          <div className="flex-1 mt-1 md:mt-0">
            <h1 className="text-3xl font-extrabold text-center md:text-start">
              Rio Prayoga Teja Putra
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-1">
              <h4 className="text-gray-400 font-medium mt-1">
                Bandung, Jawa Barat, Indonesia
              </h4>
              <span className="mt-1">
                <Image src={IdIcon} alt="indonesia flag" width={22} />
              </span>
            </div>
          </div>
          <div className="rounded-full overflow-hidden w-[110px] border-4 border-white">
            <Image src={Me} layout="responsive" alt="profile img" />
          </div>
        </div>

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

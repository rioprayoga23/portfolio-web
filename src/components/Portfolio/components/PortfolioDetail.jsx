import CImage from "@/components/core/Image";
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import { useSelector } from "react-redux";
import PDHeading from "../partials/PDHeading";
import Link from "next/link";

const PortfolioDetail = () => {
  return (
    <SectionLayout>
      <CTitle name="Movies App" />
      <p className="indent-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam
        commodi ducimus repellat similique maxime tempore aspernatur nesciunt
        esse quis obcaecati, odit consequatur beatae modi iste accusantium
        animi, temporibus perspiciatis.
      </p>
      <div className="mt-5 flex flex-col gap-4">
        <PDHeading title="Tech Stack">
          <p>Node JS, Next JS</p>
        </PDHeading>

        <PDHeading title="Other">
          <p>Lighthouse Security</p>
        </PDHeading>

        <PDHeading title="Show">
          <Link
            target="_blank"
            href="https://google.com"
            className={`underline`}
          >
            Movie App
          </Link>
        </PDHeading>

        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <CImage
              src="/"
              alt=""
              layout="responsive"
              h={0}
              w={0}
              key={index}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default PortfolioDetail;

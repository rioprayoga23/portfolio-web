import Link from "next/link";

import CImage from "@/components/core/Image";
import Label from "@/components/core/Label";
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";

const PortfolioDetail = () => {
  const { asPath } = useRouter();
  console.log(asPath);

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
        <Label title="Tech Stack">
          <p>Node JS, Next JS</p>
        </Label>

        <Label title="Other">
          <p>Lighthouse Security</p>
        </Label>

        <Label title="Show">
          <Link
            target="_blank"
            href="https://google.com"
            className={`underline`}
          >
            Movie App
          </Link>
        </Label>

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

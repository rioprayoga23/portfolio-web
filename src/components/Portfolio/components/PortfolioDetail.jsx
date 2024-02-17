import Link from "next/link";
import { useRouter } from "next/router";
import { FaLink } from "react-icons/fa6";

import { portfolioData } from "@/data/portfolios";

import CImage from "@/components/core/Image";
import Label from "@/components/core/Label";
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";
import Image from "next/image";

const PortfolioDetail = () => {
  const { query } = useRouter();

  const detail_data = portfolioData?.filter(
    (item) => item.slug === query?.q
  )?.[0];

  return (
    <SectionLayout>
      <CTitle name={detail_data?.name} />

      <p className="indent-5">{detail_data?.description}</p>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex gap-4">
          <Label title="Tech Stack" />
          <p>{detail_data.tech.join(", ")}</p>
        </div>

        {detail_data.other && (
          <div className="flex gap-4">
            <Label title="Other" />
            {/* <p>{detail_data.tech.join(", ")}</p> */}
          </div>
        )}

        <div className="flex gap-4">
          <Label title="Show" />
          <div className="flex items-center gap-1 underline">
            <Link target="_blank" href={detail_data.show}>
              {detail_data?.name}
            </Link>
            <FaLink />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {detail_data.desc_img?.map((item, index) => (
            <CImage
              src={item}
              alt={detail_data.name}
              layout="responsive"
              key={index}
              w={0}
              h={0}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default PortfolioDetail;

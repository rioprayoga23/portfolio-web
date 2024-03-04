import Link from "next/link";
import { Fragment, useRef } from "react";
import { FaLink } from "react-icons/fa6";

import CAlert from "@/components/core/Alert";
import CImage from "@/components/core/Image";
import Label from "@/components/core/Label";
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";

const PortfolioDetail = ({ detailPortfolio }) => {
  const refModal = useRef();

  return (
    <Fragment>
      <SectionLayout>
        <CTitle name={detailPortfolio?.name} />

        <p className="indent-5">{detailPortfolio?.description}</p>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex gap-4">
            <Label title="Tech Stack" />
            <p>{detailPortfolio.tech?.join(", ")}</p>
          </div>

          {detailPortfolio.other && (
            <div className="flex gap-4">
              <Label title="Other" />
              <p>{detailPortfolio.other?.join(", ")}</p>
            </div>
          )}

          {detailPortfolio?.show && (
            <div className="flex gap-4">
              <Label title="Show" />
              <div className="flex items-center gap-1 underline">
                {detailPortfolio?.show === "MAINTENANCE" ? (
                  <p
                    className="cursor-pointer"
                    onClick={() => refModal.current?.showModal()}
                  >
                    {detailPortfolio?.name}
                  </p>
                ) : (
                  <Link target="_blank" href={detailPortfolio.show}>
                    {detailPortfolio?.name}
                  </Link>
                )}
                <FaLink />
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2">
            {detailPortfolio.desc_img?.map((item, index) => (
              <CImage
                src={item}
                alt={detailPortfolio.name}
                layout="responsive"
                w={0}
                h={0}
                key={index}
              />
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Modal */}
      <CAlert refModal={refModal} />
    </Fragment>
  );
};

export default PortfolioDetail;

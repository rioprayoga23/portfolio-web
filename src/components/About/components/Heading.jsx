import Image from "next/image";

//* images
import { IdIcon, Me } from "@/configs/images";

//* components
import CImage from "@/components/core/Image";
import SectionLayout from "@/components/core/Layout/SectionLayout";

const Heading = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col-reverse items-center md:items-start md:flex-row">
        <div className="flex-1 mt-1 md:mt-0">
          <h1 className="text-3xl font-extrabold text-center md:text-start">
            Rio Prayoga Teja Putra
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-1">
            <h4 className="font-medium mt-1">Bandung, Jawa Barat, Indonesia</h4>
            <span className="mt-1">
              <Image src={IdIcon} alt="indonesia flag" width={22} />
            </span>
          </div>
        </div>

        <div className="rounded-full overflow-hidden w-[110px] border-4 border-white">
          <CImage src={Me} layout="responsive" alt="Rio Prayoga Teja Putra" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Heading;

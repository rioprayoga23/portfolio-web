import Image from "next/image";

//* images
import { IdIcon, Me2 } from "@/configs/images";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

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

          <div className="flex justify-center md:justify-start gap-3 gap-md-2 mt-3">
            <a
              href="https://www.linkedin.com/in/rioprayogatejaputra/"
              target="_blank"
            >
              <FaLinkedin size={25} />
            </a>
            <a href="https://wa.me/6285795344094" target="_blank">
              <FaWhatsapp size={25} />
            </a>
            <a href="https://instagram.com/riopryogap" target="_blank">
              <FaInstagram size={25} />
            </a>
            <a href="https://github.com/rioprayoga23" target="_blank">
              <FaGithub size={25} />
            </a>
          </div>
        </div>

        <div className="rounded-full overflow-hidden w-[110px] h-[110px] border-4 border-white">
          <Image
            src={Me2}
            layout="responsive"
            alt="Rio Prayoga Teja Putra"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Heading;

import { FaEnvelope } from "react-icons/fa6";
import { useSelector } from "react-redux";

//* components
import SectionLayout from "@/components/core/Layout/SectionLayout";
import CTitle from "@/components/core/Title";

const Contacts = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <SectionLayout className="pt-4">
      <CTitle name={"Contact"} />
      <p className="indent-5">
        {`Feel free to reach out to me with any questions or ideas you have. My
        inbox is always open, whether you're saying hi or need help! Don't hesitate to get in touch!`}
      </p>
      <div className="flex justify-center text-center mt-6">
        <a
          href="mailto:yoprayogap@gmail.com?subject=Hello Rio!"
          target="_blank"
        >
          <button
            className={`px-5 py-3 bg-neutral font-semibold rounded-lg flex items-center gap-2 ${
              isActiveTheme == "black" ? "text-[#fcb404]" : "text-success"
            }`}
          >
            <FaEnvelope
              color={`${
                isActiveTheme == "black" ? "text-[#fcb404]" : "text-success"
              }`}
              size="17px"
            />
            <span>yoprayogap@gmail.com</span>
          </button>
        </a>
      </div>
    </SectionLayout>
  );
};

export default Contacts;

import React from "react";
import Image from "next/image";

import CModal from "../Modal";

import { CodingAlert } from "@/configs/images";
import { useSelector } from "react-redux";

const CAlert = ({ refModal }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <CModal refModal={refModal}>
      <div className="py-4 flex flex-col items-center justify-center">
        <Image
          src={CodingAlert}
          className="pb-5"
          width={60}
          height={60}
          alt="coding alert"
        />
        <div className="text-center mb-5">
          <h1
            className={`text-xl md:text-2xl font-bold ${
              isActiveTheme == "black" ? "text-[#fcb404]" : "text-success"
            }`}
          >
            Oops Sorry!...
          </h1>
          <h3 className="text-lg">Currently still in the development stage.</h3>
        </div>

        <form method="dialog" className="w-full">
          <button
            className={`btn btn-block text-black rounded-xl text-base ${
              isActiveTheme == "black"
                ? " bg-[#fcb404] hover:bg-[#fcb404]/65"
                : "bg-success hover:bg-success/65"
            }`}
          >
            Oke
          </button>
        </form>
      </div>
    </CModal>
  );
};

export default CAlert;

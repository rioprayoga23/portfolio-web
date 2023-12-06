import React from "react";
import { VT323 } from "next/font/google";

const vtFont = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

const Headline = () => {
  return (
    <section className="relative z-10 flex justify-center">
      <div
        className={`dark:bg-slate-500/10 bg-zinc-200/70 transition-opacity
         px-10 py-2 rounded-lg backdrop-blur-sm text-center w-full`}
      >
        <h1
          className={`text-[23px] ${vtFont.className}`}
        >{`Hello, I'am Frontend Developer🤙`}</h1>
      </div>
    </section>
  );
};

export default Headline;

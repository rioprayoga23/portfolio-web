import Image from "next/image";

const Skill = ({ src, alt, name }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-1">
      <div className="flex justify-center items-center bg-slate-800 rounded-full w-[73px] h-[73px]">
        <Image
          src={src}
          alt={alt}
          className={
            "flex-shrink-0 w-[30px] md:w-[35px] hover:scale-125 transition-transform duration-300 ease-in-out"
          }
        />
      </div>
      <p className="font-bold text-sm text-center">{name}</p>
    </section>
  );
};

export default Skill;

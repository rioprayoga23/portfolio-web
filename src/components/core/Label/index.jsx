import { useSelector } from "react-redux";

const Label = ({ title }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <h2
      className={`w-fit flex-shrink-0 bg-neutral py-1 px-2 rounded-md font-bold h-fit ${
        isActiveTheme == "black" ? "text-[#fcb404]" : " text-success"
      }`}
    >
      {title}
    </h2>
  );
};

export default Label;

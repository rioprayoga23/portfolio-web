import { useSelector } from "react-redux";

const Label = ({ title, children, className }) => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <div className={`flex gap-2 ${className}`}>
      <h2
        className={`bg-neutral px-1 rounded-sm font-bold flex-shrink-0 h-fit ${
          isActiveTheme == "black" ? "text-[#fcb404]" : " text-success"
        }`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Label;

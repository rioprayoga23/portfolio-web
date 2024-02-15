import { useSelector } from "react-redux";

const Footer = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p
          className={`font-semibold ${
            isActiveTheme === "black" ? "text-[#fcb404]" : "text-success"
          }`}
        >
          Copyright © 2024 - Rio Prayoga Teja Putra
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

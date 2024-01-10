import { useEffect } from "react";
import { useSelector } from "react-redux";

const useSetTheme = () => {
  const { isActiveTheme } = useSelector((state) => state.themes);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", isActiveTheme);
  }, [isActiveTheme]);

  return null;
};

export default useSetTheme;

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", "dark");
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

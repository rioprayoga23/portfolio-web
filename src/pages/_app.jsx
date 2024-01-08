import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

//* css
import "@/styles/globals.css";
import "@/styles/animation.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", "dark");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

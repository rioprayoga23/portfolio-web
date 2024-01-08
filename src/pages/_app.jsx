import { ThemeProvider } from "next-themes";

//* css
import "@/styles/animation.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

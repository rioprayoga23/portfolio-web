import { ThemeProvider } from "next-themes";

//* css
import "@/styles/animation.css";
import "@/styles/globals.css";
import "@/styles/preloader.css";

//* redux
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  return (
    // <ChakraProvider theme={theme}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    // </ChakraProvider>
  );
}

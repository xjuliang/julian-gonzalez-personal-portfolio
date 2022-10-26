import {
  ChakraProvider,
  ColorModeScript
} from "@chakra-ui/react";
import { NavBar } from "src/components/pages/NavBar";
import "src/styles/globals.css";
import theme from "src/theme/index";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

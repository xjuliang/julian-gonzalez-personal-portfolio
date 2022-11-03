import {
  ChakraProvider, ColorModeScript
} from "@chakra-ui/react";
import "@fontsource/montserrat/300.css";
import { Provider } from "react-redux";
import { NavBar } from "src/components/pages/NavBar";
import store from "src/redux/store";
import "src/styles/animated-components.css";
import "src/styles/globals.css";
import theme from "src/theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ColorModeScript />
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;

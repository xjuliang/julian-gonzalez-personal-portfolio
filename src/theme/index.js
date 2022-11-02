import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Button } from "./components";

export default extendTheme({
  initialColorMode: "dark",
  colors,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    Button,
  },
});

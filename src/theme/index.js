import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export default extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors,
});

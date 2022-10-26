import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ItalicText } from "src/components/others";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const secondaryColor = useColorModeValue(
    "custom.secondaryLight",
    "custom.secondaryDark"
  );

  return (
    <Flex
      alignItems="center"
      bg={secondaryColor}
      h="50px"
      w="100vw"
      p="30px"
      position="fixed"
      borderBottom="0.001cm solid grey"
      zIndex="1"
    >
      <ItalicText fontSize="30px">JG</ItalicText>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default NavBar;

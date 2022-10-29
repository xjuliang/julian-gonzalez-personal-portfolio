import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ItalicText } from "src/components/others";
import { languageActions } from "src/redux/states/language";

const NavBar = () => {
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const storeLanguage = useSelector((store) => store.language.value);

  const toggleLanguage = () => {
    if (storeLanguage == "EN") {
      dispatch(languageActions.changeLanguage("ES"));
    } else {
      dispatch(languageActions.changeLanguage("EN"));
    }
  };

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
      <Button onClick={toggleLanguage} mr={3}>
        {storeLanguage === "EN" ? "ES" : "EN"}
      </Button>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default NavBar;

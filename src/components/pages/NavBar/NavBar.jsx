import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  Show,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { navEN, navES } from "data";
import { useDispatch, useSelector } from "react-redux";
import { ItalicText } from "src/components/others";
import { languageActions } from "src/redux/states/language";
import { NavBarContent } from "./NavBarContent";
import { NavBarDrawer } from "./NavBarDrawer";

const NavBar = () => {
  const dispatch = useDispatch();
  const storeLanguage = useSelector((store) => store.language.value);

  let nav = {};
  if (storeLanguage == "EN") {
    nav = navEN;
  } else {
    nav = navES;
  }

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
      <Hide breakpoint="(max-width: 700px)">
        <NavBarContent
          nav={nav}
          toggleLanguage={toggleLanguage}
          storeLanguage={storeLanguage}
        />
      </Hide>
      <Show breakpoint="(max-width: 700px)">
        <NavBarDrawer
          nav={nav}
          toggleLanguage={toggleLanguage}
          storeLanguage={storeLanguage}
        />
      </Show>
    </Flex>
  );
};

export default NavBar;

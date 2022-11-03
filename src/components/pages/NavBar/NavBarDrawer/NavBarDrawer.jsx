import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

const NavBarDrawer = ({ nav, toggleLanguage, storeLanguage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button onClick={onOpen}>
        <HamburgerIcon w={6} h={6} />
      </Button>
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size={["xl", "xs"]}
      >
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("#fff", "#000")}>
          <DrawerHeader borderBottom="0.001cm solid grey" fontSize="19px">
            Menu
          </DrawerHeader>
          <DrawerCloseButton size="lg" top={3} />
          <DrawerBody>
            <Flex align="start" direction="column" mt={7}>
              {nav.sections.map((s) => (
                <Link
                  to={s.href}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={1000}
                  key={s.title}
                >
                  <Text
                    mb={7}
                    cursor="pointer"
                    fontSize="22px"
                    onClick={() => {
                      setTimeout(onClose, 0);
                    }}
                  >
                    {s.title}
                  </Text>
                </Link>
              ))}
            </Flex>
          </DrawerBody>
          <DrawerFooter borderTop="0.001cm solid grey">
            <Flex gap={5}>
              <Button onClick={toggleLanguage} mb={5}>
                {storeLanguage === "EN" ? "ES" : "EN"}
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavBarDrawer;

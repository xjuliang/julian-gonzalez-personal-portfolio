import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-scroll";

import React from "react";

const NavBarContent = ({ nav, toggleLanguage, storeLanguage }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      {nav.sections.map((s) => (
        <Text key={s.title} mr={5} cursor="pointer">
          <Link
            to={s.href}
            spy={true}
            smooth={true}
            offset={-30}
            duration={1200}
          >
            {s.title}
          </Link>
        </Text>
      ))}

      <Button onClick={toggleLanguage} mr={3}>
        {storeLanguage === "EN" ? "ES" : "EN"}
      </Button>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default NavBarContent;

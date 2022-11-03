import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-scroll";

import React from "react";

const NavBarContent = ({ nav, toggleLanguage, storeLanguage }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navLinkId = useColorModeValue("nav-link-white", "nav-link-dark");

  return (
    <Flex align="center">
      {nav.sections.map((s) => (
        <Link
          to={s.href}
          spy={true}
          smooth={true}
          offset={-30}
          duration={1200}
          key={s.title}
        >
          <p class="nav-link" id={navLinkId}>
            {s.title}
          </p>
        </Link>
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

import { Center, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { ItalicText, Particles } from "src/components/others";

const Header = () => {
  const titleColor = useColorModeValue("grey", "darkGrey");
  return (
    <Center align="center" justify="center" h="100vh">
      <Particles />
      <Flex direction="column" align={["center", "center","center", "start"]}>
        <ItalicText fontSize={["45px", "55px", "70px"]}>
          julian gonzalez
        </ItalicText>
        <Heading
          fontSize={["16px", "20px", "25px"]}
          fontWeight="100"
          color={titleColor}
        >
          Frontend Developer & Computer Technician
        </Heading>
      </Flex>
    </Center>
  );
};

export default Header;

import {
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ItalicText } from "src/components/others";

const Header = () => {
  const titleColor = useColorModeValue("grey", "darkGrey");
  return (
    <Center align="center" justify="center" h="100vh">
      <Flex direction="column" align="start">
        <ItalicText fontSize="70px">julian gonzalez</ItalicText>
        <Heading fontSize="25px" fontWeight="100" color={titleColor}>
          Frontend Developer & Computer Technician
        </Heading>
      </Flex>
    </Center>
  );
};

export default Header;

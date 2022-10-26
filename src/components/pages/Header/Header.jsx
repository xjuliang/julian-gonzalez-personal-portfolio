import {
  Center,
  Flex,
  Heading,
  Spacer,
  useColorModeValue
} from "@chakra-ui/react";
import { ItalicText, Particles } from "src/components/others";

const Header = () => {
  const titleColor = useColorModeValue("grey", "darkGrey");
  const scrollIconColor = useColorModeValue("mousey-black", "mousey-white");
  const scrollerIconColor = useColorModeValue(
    "scroller-black",
    "scroller-white"
  );

  return (
    <Center align="center" justify="center" h="100vh">
      <Particles />
      <Flex direction="column" h="100%">
        <Spacer />

        <Flex
          direction="column"
          align={["center", "center", "center", "start"]}
          h="100%"
        >
          <Spacer />
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
          <Spacer />
        </Flex>
        <Spacer />
        <Center mb="20px">
          <div class="scroll-downs">
            <div class={scrollIconColor}>
              <div class={scrollerIconColor}></div>
            </div>
          </div>
        </Center>
      </Flex>
    </Center>
  );
};

export default Header;

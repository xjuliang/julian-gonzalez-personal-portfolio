import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { ItalicText, Particles } from "src/components/others";

const Header = () => {
  const titleColor = useColorModeValue("grey", "darkGrey");
  const scrollIconColor = useColorModeValue("mousey-black", "mousey-white");
  const scrollerIconColor = useColorModeValue(
    "scroller-black",
    "scroller-white"
  );

  return (
    <section>
      <Particles></Particles>
      <Center align="center" justify="center" h="100vh">
        <Box h="60px" bg="red"></Box>
        <Flex direction="column" h="100%" align="center">
          <Spacer />
          <Flex
            direction="column"
            align={["center", "center", "center", "start"]}
          >
            <Spacer />
            <Fade bottom>
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
            </Fade>
            <Spacer />
          </Flex>
          <Spacer />
          <Center pb="25px">
            <Fade bottom>
              <div class="scroll-downs">
                <div class={scrollIconColor}>
                  <div class={scrollerIconColor}></div>
                </div>
              </div>
            </Fade>
          </Center>
        </Flex>
      </Center>
    </section>
  );
};

export default Header;

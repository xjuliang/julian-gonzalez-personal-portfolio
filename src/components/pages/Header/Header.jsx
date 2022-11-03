import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { headerEN, headerES } from "data";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { ItalicText, Particles } from "src/components/others";

const Header = () => {
  const storeLanguage = useSelector((store) => store.language.value);
  let header = {};
  if (storeLanguage == "EN") {
    header = headerEN;
  } else {
    header = headerES;
  }
  const titleColor = useColorModeValue("grey", "darkGrey");
  const scrollIconColor = useColorModeValue("mousey-black", "mousey-white");
  const scrollerIconColor = useColorModeValue(
    "scroller-black",
    "scroller-white"
  );

  return (
    <section id="home">
      <Particles></Particles>
      <Fade bottom>
        <Center align="center" justify="center" h="100vh" py="50px">
          <Flex direction="column" h="100%" align="center">
            <Spacer />
            <Flex
              direction="column"
              align={["center", "center", "center", "start"]}
            >
              <ItalicText fontSize={["40px", "55px", "70px"]}>
                julian gonzalez
              </ItalicText>
              <Heading
                fontSize={["16px", "20px", "25px"]}
                fontWeight="100"
                color={titleColor}
              >
                {header.subtitle}
              </Heading>
            </Flex>
            <Spacer />
            <Box>
              <div class="scroll-downs">
                <div class={scrollIconColor}>
                  <div class={scrollerIconColor}></div>
                </div>
              </div>
            </Box>
          </Flex>
        </Center>
      </Fade>
    </section>
  );
};

export default Header;

import { Box, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { journeyEN, journeyES } from "data";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { ItalicText } from "../..";
import { JourneyInfo } from "./JourneyInfo";

const Journey = () => {
  const storeLanguage = useSelector((store) => store.language.value);
  let journey = {};
  if (storeLanguage == "EN") {
    journey = journeyEN;
  } else {
    journey = journeyES;
  }
  const scrollIconColor = useColorModeValue("mousey-black", "mousey-white");
  const scrollerIconColor = useColorModeValue(
    "scroller-black",
    "scroller-white"
  );
  const bgColor = useColorModeValue(
    "custom.primaryLight",
    "custom.primaryDark"
  );
  return (
    <section id="journey">
      <Flex
        align="center"
        justify="center"
        direction="column"
        minH="100vh"
        py="50px"
        bg={bgColor}
      >
        <Spacer />
        <Fade bottom>
          <ItalicText pb={[5, 10]}>{journey.title}</ItalicText>
          <JourneyInfo journey={journey} />
        </Fade>
        <Spacer />
        <Box>
          <Fade bottom>
            <div class="scroll-downs">
              <div class={scrollIconColor}>
                <div class={scrollerIconColor}></div>
              </div>
            </div>
          </Fade>
        </Box>
      </Flex>
    </section>
  );
};

export default Journey;

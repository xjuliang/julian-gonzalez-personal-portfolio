import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { ItalicText } from "../..";
import { Skills } from "./Skills";

const About = () => {
  const resumeBtnColor = useColorModeValue("btn-white", "btn-dark");
  const scrollIconColor = useColorModeValue("mousey-black", "mousey-white");
  const scrollerIconColor = useColorModeValue(
    "scroller-black",
    "scroller-white"
  );
  const bgColor = useColorModeValue(
    "custom.primaryLight",
    "custom.primaryDark"
  );
  const fontColor = useColorModeValue("", "#cecece");

  return (
    <section>
      <Fade bottom>
        <Flex
          align="center"
          justify="center"
          direction="column"
          minH="100vh"
          py="50px"
          bg={bgColor}
        >
          <Spacer />

          <ItalicText maxWidth="500px" pb={[5, 5, 10, 20]}>
            About me
          </ItalicText>
          <Flex
            align="start"
            justify="center"
            direction={["column", "column", "row", "row"]}
          >
            <Box mx={5} align="start">
              <Heading fontSize="22px" mb={3}>
                Hello!
              </Heading>
              <Box maxWidth="550px" fontSize="16px" color={fontColor}>
                <Text>
                  My name is Julián González I´m a passionate Frontend Web
                  Developer.
                </Text>
                <Text>
                  I consider myself an active person, who is constantly learning
                  and always open to receive feedback.
                </Text>
                <Text>
                  Although I have a preference for Frontend, I am also
                  interested in learning about other areas.
                </Text>
                <Text>
                  I will love to hear from you. Whether it´s a project, job
                  opportunity, or just chat. Feel free to contact me.
                </Text>
                <Box mt={5}>
                  <form
                    action="https://drive.google.com/file/d/1bPJ3QuMrrwZPLnhvGOJ_5o9gOibaGOdk/view?usp=sharing"
                    target="_blank"
                  >
                    <button class={resumeBtnColor} type="submit">
                      <span>Resume</span>
                    </button>
                  </form>
                </Box>
              </Box>
            </Box>
            <Skills />
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
      </Fade>
    </section>
  );
};

export default About;

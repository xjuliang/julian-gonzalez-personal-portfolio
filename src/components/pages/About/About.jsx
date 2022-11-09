import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { aboutEN, aboutES } from "data";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { ItalicText } from "../..";
import { Skills } from "./Skills";

const About = () => {
  const storeLanguage = useSelector((store) => store.language.value);
  let about = {};
  if (storeLanguage == "EN") {
    about = aboutEN;
  } else {
    about = aboutES;
  }

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
  const fontColor = useColorModeValue("", "#cececece");
  const iconsColor = useColorModeValue("-dark", "-white");

  return (
    <section id="about">
      <Flex
        align="center"
        justify="center"
        direction="column"
        minH="100vh"
        py="50px"
        bg={bgColor}
      >
        <Spacer />
        <Fade left>
          <ItalicText pb={[5, 5, 10, 20]}>{about.title}</ItalicText>
        </Fade>
        <Fade bottom>
          <Flex
            align="start"
            justify="center"
            direction={["column", "column", "row", "row"]}
          >
            <Box
              ml={5}
              mr={[5, 5, 2, 2]}
              w={["90%", "94%", "50%", "50%"]}
              maxW="550px"
            >
              <Heading fontSize="22px" mb={3}>
                {about.descriptionSectionName}
              </Heading>
              <Box fontSize="16px" fontWeight="bold" color={fontColor}>
                {about.description.map((el) => (
                  <Text key={el}>{el}</Text>
                ))}
                <Flex mt={5} align="center">
                  <a
                    href="https://drive.google.com/file/d/1bPJ3QuMrrwZPLnhvGOJ_5o9gOibaGOdk/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button class={resumeBtnColor} type="submit">
                      <span>{about.resumeText}</span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/xjuliang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      leftIcon={
                        <Image
                          src={`/icons/github${iconsColor}.svg`}
                          layout="fill"
                          alt="github"
                          h="40px"
                        />
                      }
                      variant="unstyled"
                      ml={5}
                    ></Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juli%C3%A1n-marcos-gonz%C3%A1lez-354403201/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      leftIcon={
                        <Image
                          src={`/icons/linkedin${iconsColor}.svg`}
                          layout="fill"
                          alt="linkedin"
                          h="40px"
                        />
                      }
                      variant="unstyled"
                      ml={5}
                    ></Button>
                  </a>
                </Flex>
              </Box>
            </Box>
            <Skills about={about} />
          </Flex>
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

export default About;

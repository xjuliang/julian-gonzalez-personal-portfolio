import { Flex, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { contactEN, contactES } from "data";
import React from "react";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { ItalicText } from "../..";
import { AnimatedBtn } from "../../others";

const Contact = () => {
  const storeLanguage = useSelector((store) => store.language.value);
  let contact = {};
  if (storeLanguage == "EN") {
    contact = contactEN;
  } else {
    contact = contactES;
  }
  const bgColor = useColorModeValue(
    "custom.primaryLight",
    "custom.primaryDark"
  );

  return (
    <section id="contact">
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
          <ItalicText pb={[5, 10]}>{contact.title}</ItalicText>
        </Fade>
        <Fade bottom>
          <Text w={["90vw", "90vw", "650px", "100vw"]} maxW="700px" mb={5}>
            {contact.description}
          </Text>
          <AnimatedBtn
            onClick={() => window.open("mailto:julianmarcos505@gmail.com")}
          >
            {contact.button}
          </AnimatedBtn>
        </Fade>
        <Spacer />
      </Flex>
    </section>
  );
};

export default Contact;

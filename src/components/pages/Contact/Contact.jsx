import { Flex, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { contactEN, contactES } from "data";
import React from "react";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { ItalicText } from "../..";

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
  const resumeBtnColor = useColorModeValue("btn-white", "btn-dark");

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
        <Fade bottom>
          <ItalicText pb={[5, 10]}>{contact.title}</ItalicText>
          <Text w={["90vw", "90vw", "650px", "100vw"]} maxW="700px" mb={5}>
            {contact.description}
          </Text>
          <button
            class={resumeBtnColor}
            onClick={() => window.open("mailto:julianmarcos505@gmail.com")}
          >
            <span>{contact.button}</span>
          </button>
        </Fade>
        <Spacer />
      </Flex>
    </section>
  );
};

export default Contact;

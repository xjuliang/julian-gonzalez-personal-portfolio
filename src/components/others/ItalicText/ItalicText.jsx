import { Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ItalicText = (props) => {
  const fontColor = useColorModeValue(
    "custom.primaryDark",
    "custom.primaryLight"
  );
  return (
    <Heading
      fontFamily="Italic Bricks"
      fontWeight="0"
      color={fontColor}
      {...props}
    >
      {props.children}
    </Heading>
  );
};

export default ItalicText;

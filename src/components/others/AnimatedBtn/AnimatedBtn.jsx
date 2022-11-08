import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

const AnimatedBtn = (props) => {
  const btnColorClass = useColorModeValue("btn-white", "btn-dark");

  return (
    <button class={btnColorClass} {...props}>
      <span>{props.children}</span>
    </button>
  );
};

export default AnimatedBtn;

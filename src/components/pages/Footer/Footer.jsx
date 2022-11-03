import {
	Box,
	Button, Flex, useColorModeValue
} from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Footer = () => {
  const iconsColor = useColorModeValue("-dark", "-white");
  const hoverColor = useColorModeValue("#EDF2F7", "#111111");
  const storeLanguage = useSelector((store) => store.language.value);

  return (
    <footer>
      <Flex
        borderTop="0.001cm solid grey"
        bg={useColorModeValue("white", "black")}
        h="100px"
        position="absolute"
        w="100%"
        fontWeight="600"
        fontSize="14px"
        align="center"
        justify="center"
        direction="column"
      >
        <Box my={2}>
          <Button
            onClick={() => window.open("https://github.com/xjuliang")}
            leftIcon={
              <Image
                src={`/icons/github${iconsColor}.svg`}
                layout="fill"
                alt="github"
                h="30px"
              />
            }
            h="30px"
            variant="unstyled"
            mr={2}
            _hover={{ background: hoverColor }}
          ></Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/juli%C3%A1n-marcos-gonz%C3%A1lez-354403201/"
              )
            }
            leftIcon={
              <Image
                src={`/icons/linkedin${iconsColor}.svg`}
                layout="fill"
                alt="linkedin"
                h="30px"
              />
            }
            h="30px"
            variant="unstyled"
            _hover={{ background: hoverColor }}
            ml={2}
          ></Button>
        </Box>
        <Box>{storeLanguage == "EN" ? "Designed & Built by Julián González" : "Diseñado & Creado por Julián González"}</Box>
      </Flex>
    </footer>
  );
};

export default Footer;

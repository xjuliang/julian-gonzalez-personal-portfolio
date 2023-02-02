import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Hide,
  Show,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

const AccordionItemJourney = ({ info }) => {
  const iconsColor = useColorModeValue("-dark", "-white");
  const btnBg = useColorModeValue("#fff", "#000");

  const linkHandler = (link) => {
    window.open(link);
  };

  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: "RGBA(0, 0, 0, 0.04)" }}>
        <Box
          flex="1"
          textAlign="left"
          fontSize={["16px", "19px"]}
          fontWeight="bold"
        >
          <Flex>
            <Text mr={4}>{info.title}</Text>
            <Hide breakpoint="(max-width: 540px)">
              <Text fontWeight="medium">{info.date}</Text>
            </Hide>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel fontSize={["14px", "16px"]}>
        <Text fontSize={["15px", "17px"]} fontWeight="bold">
          {info.role}
        </Text>
        {info.description}
        <Flex mt={3}>
          <Show breakpoint="(max-width: 540px)">
            <Text fontWeight="medium" mt={2} mr={3}>
              {info.date}
            </Text>
          </Show>
          {info.link && (
            <a href={info.link} target="_blank" rel="noreferrer">
            <Button
              rightIcon={
                <Image
                  src={`/icons/link${iconsColor}.svg`}
                  alt="link"
                  width="18px"
                  height="18px"
                />
              }
              p={2}
              size="sm"
              bg={btnBg}
            >
              Link
            </Button>
            </a>
          )}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionItemJourney;

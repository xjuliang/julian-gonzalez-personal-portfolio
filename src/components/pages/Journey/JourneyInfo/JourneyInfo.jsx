import { Accordion, Box, Center, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatedBtn } from "src/components/others";
import { AccordionItemJourney } from "./AccordionItemJourney";

const JourneyInfo = ({ journey }) => {
  const [category, setCategory] = useState("education");
  const btnBgColor = useColorModeValue("#000", "#fff");

  return (
    <Box>
      <Center mb={[5, 10]}>
        <AnimatedBtn
          style={{
            background: category == "education" && btnBgColor,
            padding: "12px",
            fontSize: "16px",
          }}
          onClick={() => {
            setCategory("education");
          }}
        >
          {journey.education.title}
        </AnimatedBtn>
        <Box w={[5, 5, 10, 10]}></Box>
        <AnimatedBtn
          style={{
            background: category == "experience" && btnBgColor,
            padding: "12px",
            fontSize: "16px",
          }}
          onClick={() => {
            setCategory("experience");
          }}
        >
          {journey.experience.title}
        </AnimatedBtn>
      </Center>
      <Accordion
        allowToggle
        w={["90vw", "90vw", "650px", "100vw"]}
        maxW="700px"
        h="300px"
      >
        {category == "experience"
          ? journey.experience.data.map((e) => (
              <AccordionItemJourney key={e.title} info={e} />
            ))
          : journey.education.data.map((e) => (
              <AccordionItemJourney key={e.title} info={e} />
            ))}
      </Accordion>
    </Box>
  );
};

export default JourneyInfo;

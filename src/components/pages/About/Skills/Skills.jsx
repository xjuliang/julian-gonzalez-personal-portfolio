import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { SkillCard } from "./SkillCard";

const Skills = ({ about }) => {
  const skillElementColor = useColorModeValue(
    "#fff",
    "rgba(255, 255, 255, 0.06)"
  );

  return (
    <Box
      mr={5}
      my={[8, 8, 0, 0]}
      pl={[5, 5, 2, 2]}
      w={["94%", "97%", "50%", "50%"]}
      maxW="550px"
    >
      <Heading fontSize="22px" align="left" mb={3}>
        {about.skillsSectionName}
      </Heading>
      <Box align="start" fontSize="16px">
        {about.skills.map((el) => (
          <Box key={el.name} mt={3}>
            <Text mb={1}>{el.name}</Text>
            <Flex
              bg={skillElementColor}
              p={3}
              borderRadius="8px"
              flexWrap="wrap"
              border="1px solid grey"
            >
              {el.technologies.map((t) => (
                <SkillCard key={t}>{t}</SkillCard>
              ))}
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;

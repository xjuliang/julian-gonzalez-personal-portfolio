import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { about } from "data";
import { SkillCard } from "./SkillCard";

const Skills = () => {
  const skillElementColor = useColorModeValue("#fff", "rgba(255, 255, 255, 0.06)");

  return (
    <Box mx={5} maxWidth="550px">
      <Heading fontSize="22px" align="left" mb={3}>
        Skills
      </Heading>
      <Box align="start" fontSize="16px">
        {about.skills.map((el) => (
          <Box key={el.name} mt={3}>
            <Text>{el.name}</Text>
            <Flex
              bg={skillElementColor}
              p={2}
              borderRadius="8px"
              flexWrap="wrap"
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

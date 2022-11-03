import { Box, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { projectsEN, projectsES } from "data";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { ItalicText, ProjectsInfo } from "../..";

const Projects = () => {
  const storeLanguage = useSelector((store) => store.language.value);
  let projects = {};
  if (storeLanguage == "EN") {
    projects = projectsEN;
  } else {
    projects = projectsES;
  }
  const scrollIconColor = useColorModeValue("mousey-black", "mousey-white");
  const scrollerIconColor = useColorModeValue(
    "scroller-black",
    "scroller-white"
  );
  const bgColor = useColorModeValue(
    "custom.primaryLight",
    "custom.primaryDark"
  );

  return (
    <section id="projects">
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
          <ItalicText pb={[5, 5, 10, 10]}>{projects.title}</ItalicText>
          <ProjectsInfo projects={projects} />
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

export default Projects;

import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const ProjectsInfo = ({ projects }) => {
  return (
    <Center>
      <Grid
        px={5}
        alignSelf="center"
        gap={5}
        gridTemplateColumns="repeat(auto-fill, minmax(min(90%,18rem),1fr))"
        w={["100%", "100%", "90%", "100%", "1150px"]}
        pb="50px"
      >
        {projects.data.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </Grid>
    </Center>
  );
};

export default ProjectsInfo;

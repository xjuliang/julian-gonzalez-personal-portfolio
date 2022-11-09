import {
  Box,
  Button,
  Grid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const cardClass = useColorModeValue(
    "project-card-white",
    "project-card-dark"
  );
  const iconsColor = useColorModeValue("-dark", "-white");
  const bgColor = useColorModeValue("#fff", "#000");

  const linkHandler = (link) => {
    window.open(link);
  };

  return (
    <div class={cardClass}>
      <Image
        src={`/${project.image}`}
        alt={project.title}
        height="550px"
        width="1000px"
        style={{ borderRadius: "8px 8px 0 0", maxHeight: "100px" }}
      />
      <Box px={3} py={2}>
        <Text fontSize="18px" align="center" fontWeight={800} pb={2}>
          {project.title}
        </Text>
        <Text fontSize="13px">{project.bodyText}</Text>
      </Box>
      <Grid
        px={3}
        pb={2}
        align="center"
        gap={1}
        gridTemplateColumns="repeat(auto-fill, minmax(min(90%,4.5rem),1fr))"
      >
        {project.tags.map((t) => (
          <Box key={t} fontSize="12px" bg={bgColor} p={1} borderRadius="8px">
            {t}
          </Box>
        ))}
      </Grid>
      <Spacer />
      <Box pb={3} align="center">
        <a href={project.links.code} target="_blank" rel="noreferrer">
          <Button
            leftIcon={
              <Image
                src={`/icons/github${iconsColor}.svg`}
                layout="fill"
                alt="github"
              />
            }
            variant="unstyled"
            size="sm"
            mr={4}
          ></Button>
        </a>
        <a href={project.links.page} target="_blank" rel="noreferrer">
          <Button
            onClick={() => linkHandler(project.links.page)}
            leftIcon={
              <Image
                src={`/icons/link${iconsColor}.svg`}
                layout="fill"
                alt="page"
              />
            }
            variant="unstyled"
            size="sm"
            ml={4}
          ></Button>
        </a>
      </Box>
    </div>
  );
};

export default ProjectCard;

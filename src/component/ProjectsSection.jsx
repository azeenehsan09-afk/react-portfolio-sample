import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";

const projects = [
  {
    title: "Weather App",
    description:
      "A weather application built using HTML, CSS, and JavaScript. It uses the OpenWeather API to display real-time weather information with a responsive user interface.",
    imageSrc: photo1,
  },
  {
    title: "Calculator App",
    description:
      "A calculator application built to practice JavaScript fundamentals, event handling, and creating interactive user experiences.",
    imageSrc: photo2,
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive restaurant homepage created using HTML, CSS, and Bootstrap with a modern layout and user-friendly design.",
    imageSrc: photo3,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
  backgroundColor="#14532d"
  isDarkBackground
  p={{ base: 4, md: 8 }}
  alignItems="flex-start"
  spacing={8}
  overflowX="hidden"
>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>

     <Box
  display="grid"
  width="100%"
  gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
  gridGap={8}
>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
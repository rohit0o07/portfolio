import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Carde from "../components/Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
  {
    title: "CryptoCurrency",
    description:
      "Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments.",
    getImageSrc: () => require("../images/project.jpg"),
  },
  {
    title: "React blog",
    description:
      "We can write blogs in this project",
    getImageSrc: () => require("../images/project22.jpg")
  },
  {
    title: "Grocery List",
    description:
      "grocery list adding grocery items with reactjs",
    getImageSrc: () => require("../images/project9.jpg")
  },
  {
    title: "Grocery2 List",
    description:
      "adding items list with reactjs",
    getImageSrc: () => require("../images/project4.jpg")
  },
  {
    title: "Weather App",
    description:
      "Current weather app for  various countries implemented with react js ",
    getImageSrc: () => require("../images/project5.jpg")
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="orange"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Carde
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

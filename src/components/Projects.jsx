import React from "react";
import { CardDeck } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const ProjectList = [
    {
      projectCardImgPath: "./assets/ninjaprep.png",
      projectCardTitle: "NINJAPREP.IO",
      projectCardText: "E-LEARNING CODING PLATFORM",
      projectCardLink: "https://www.ninjaprep.io/",
    },
    {
      projectCardImgPath: "./assets/ninjaprep.png",
      projectCardTitle: "NINJAPREP.IO",
      projectCardText: "E-LEARNING CODING PLATFORM",
      projectCardLink: "https://www.ninjaprep.io/",
    },
    {
      projectCardImgPath: "./assets/ninjaprep.png",
      projectCardTitle: "NINJAPREP.IO",
      projectCardText: "E-LEARNING CODING PLATFORM",
      projectCardLink: "https://www.ninjaprep.io/",
    },
  ];
  return (
    <div className="container my-5 py-5">
      <h3 className="text-uppercase">Projects</h3>
      <p className="text-secondary pb-4">Some interesting things that I have done and am working on.</p>
      <CardDeck>
        {ProjectList.map((card, i) => (
          <ProjectCard key={i} {...card} />
        ))}
      </CardDeck>
    </div>
  );
};

export default Projects;
export { default as Projects } from "./Projects";

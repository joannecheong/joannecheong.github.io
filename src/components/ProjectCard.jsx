import React from "react";
import { Card } from "react-bootstrap";
import "../css/project-card.css";

const ProjectCard = (props) => {
  return (
    <Card className="text-white project-card shadow">
      <Card.Img
        className="project-img"
        src={props.projectCardImgPath}
        alt="Card image"
      />
      <Card.ImgOverlay className="justify-content-end d-flex flex-column">
        <Card.Title className="font-weight-bold text-dark text-uppercase m-0">
          {props.projectCardTitle}
        </Card.Title>
        <Card.Text className="text-dark text-uppercase">
          {props.projectCardText}
        </Card.Text>
      </Card.ImgOverlay>
      <a
        href={props.projectCardLink}
        target="_blank"
        className="stretched-link"
      ></a>
    </Card>
  );
};

export default ProjectCard;
export { default as ProjectCard } from "./ProjectCard";

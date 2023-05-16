import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.github}>
        <GitHubIcon />
      </a>
      <div>
        <h3>Live Demo:</h3>
        <a href={project.link}>{project.name}</a>
      </div>
      <div>
        <h3>Client:</h3>
        <p>{project.client}</p>
      </div>

      <section>
        <p id="description">{project.description}</p>
      </section>
    </div>
  );
}

export default ProjectDisplay;

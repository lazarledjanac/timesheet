import React from "react";
import ProjectItem from "../components/ProjectItem";
import { getAllProjects } from "../services/projects.service";

export default function ProjectList() {
  const projects = getAllProjects();

  return (
    <div className="accordion-wrap projects">
      {projects.map((project) => (
        <ProjectItem
          name={project.name}
          client={project.client}
          lead={project.lead}
          description={project.description}
          key={project.id}
        />
      ))}
    </div>
  );
}

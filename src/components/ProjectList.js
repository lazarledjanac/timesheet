import React, { useState, useEffect } from "react";
import ProjectItem from "../components/ProjectItem";
import axios from "axios";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("../data/projects.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="accordion-wrap projects">
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

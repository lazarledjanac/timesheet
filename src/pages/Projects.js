import React from "react";
import LetterButtonsContainer from "../components/LetterButtonsContainer";
import ProjectItem from "../components/ProjectItem";
import Layout from "../layout/Layout";
import CreateProjectForm from "../components/CreateProjectForm";
import Pagination from "../components/Pagination";
import GreyBoxWrap from "../components/GreyBoxWrap";

function Projects() {
  return (
    <Layout>
      <h2>
        <i class="ico projects"></i>Projects
      </h2>
      <GreyBoxWrap title={"project"} />
      <CreateProjectForm />
      <LetterButtonsContainer />
      <div class="accordion-wrap projects">
        <ProjectItem name={"BuzzMonitor"} />
        <ProjectItem name={"PWN"} />
        <ProjectItem name={"B&G"} />
      </div>
      <Pagination />
    </Layout>
  );
}

export default Projects;

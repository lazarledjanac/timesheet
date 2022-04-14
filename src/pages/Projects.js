import React from "react";
import LetterButtonsContainer from "../components/LetterButtonsContainer";
import ProjectList from "../components/ProjectList";
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
      <ProjectList />
      <Pagination />
    </Layout>
  );
}

export default Projects;

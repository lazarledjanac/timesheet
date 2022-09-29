import React, { useEffect, useRef } from "react";
import {
  Pagination,
  LetterButtonsContainer,
  Modal,
  Project,
  CreateProjectForm,
  SearchInput,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects, setCurrentPage } from "../features/Projects";

function Projects() {
  const dispatch = useDispatch();
  const { projectList, filteredProjects, letter, term, currentPage, pageSize } =
    useSelector((store) => store.projects);

  const modalRef = useRef();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [currentPage, term, letter, projectList.length]);

  const closeModal = () => {
    modalRef.current.close();
  };

  const openModal = () => {
    modalRef.current.openModal();
  };

  let pagination;

  if (!term && !letter) {
    pagination = (
      <Pagination
        currentPage={currentPage}
        totalCount={projectList.length}
        pageSize={pageSize}
        onPageChange={(page) => {
          dispatch(setCurrentPage(page));
        }}
      />
    );
  }
  return (
    <>
      <h2>
        <i className="ico projects"></i>Projects
      </h2>
      <div className="grey-box-wrap reports ico-member">
        <a className="link new-member-popup test" onClick={openModal}>
          <span>Create new project</span>
        </a>
        <SearchInput />
      </div>
      <LetterButtonsContainer />
      <div className="accordion-wrap projects">
        {filteredProjects.map((project) => (
          <Project id={project.id} key={project.id} />
        ))}
      </div>
      {pagination}
      <Modal ref={modalRef}>
        <CreateProjectForm close={closeModal} />
      </Modal>
    </>
  );
}
export default Projects;

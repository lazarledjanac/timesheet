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
  }, [currentPage, term, letter]);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.close();
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
      <div className="grey-box-wrap reports">
        <a className="link new-member-popup" onClick={openModal}>
          Create new project
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

import React, { useEffect, useRef, useState } from "react";
import {
  Pagination,
  LetterButtonsContainer,
  Modal,
  Project,
  CreateProjectForm,
  SearchInput,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../features/Projects";
let pageSize = 6;

function Projects() {
  const dispatch = useDispatch();
  const { projectList, filteredProjects } = useSelector(
    (store) => store.projects
  );
  const modalRef = useRef();

  const [currentPage, setCurrentPage] = useState(1);
  const [term, setTerm] = useState(null);
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    dispatch(
      getAllProjects({
        currentPage: currentPage,
        pageSize: pageSize,
        term: null,
        letter: null,
      })
    );
  }, [currentPage]);

  useEffect(() => {
    setLetter(null);
    dispatch(
      getAllProjects({
        currentPage: currentPage,
        pageSize: pageSize,
        term: term,
        letter: null,
      })
    );
  }, [term]);

  useEffect(() => {
    setTerm("");
    dispatch(
      getAllProjects({
        currentPage: currentPage,
        pageSize: pageSize,
        term: null,
        letter: letter,
      })
    );
  }, [letter]);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  return (
    <>
      <h2>
        <i className="ico projects"></i>Projects
      </h2>
      <div className="grey-box-wrap reports">
        <a className="link new-member-popup" onClick={openModal}>
          Create new project
        </a>
        <SearchInput
          term={term}
          onChange={(e) => {
            setTerm(e?.target?.value);
          }}
        />
      </div>
      <LetterButtonsContainer onSetLetter={(letter) => setLetter(letter)} />
      <div className="accordion-wrap projects">
        {filteredProjects.map((project) => (
          <Project id={project.id} key={project.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={projectList.length}
        pageSize={pageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
      <Modal ref={modalRef}>
        <CreateProjectForm close={closeModal} />
      </Modal>
    </>
  );
}
export default Projects;

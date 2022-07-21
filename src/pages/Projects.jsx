import React, { useEffect, useRef, useState } from "react";
import {
  Pagination,
  LetterButtonsContainer,
  Modal,
  Project,
  Form,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../features/Projects";

let pageSize = 6;

function Projects() {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects.value);

  const modalRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [term, setTerm] = useState(null);
  const [letter, setLetter] = useState(null);
  const [numberOfProjects, setNumberOfProjects] = useState(projectList.length);

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
        <div className="search-page">
          <input
            value={term || ""}
            type="search"
            name="search-clients"
            className="in-search"
            onChange={(e) => {
              setTerm(e?.target?.value);
            }}
          />
        </div>
      </div>
      <LetterButtonsContainer onSetLetter={(letter) => setLetter(letter)} />
      <div className="accordion-wrap projects">
        {projectList.map((project, index) => (
          <Project id={project.id} key={index} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={numberOfProjects}
        pageSize={pageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
      <Modal ref={modalRef}>
        <Form isProject={true} close={closeModal} />
      </Modal>
    </>
  );
}
export default Projects;

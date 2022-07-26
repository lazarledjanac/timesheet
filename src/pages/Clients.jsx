import React, { useEffect, useState, useRef } from "react";
import {
  LetterButtonsContainer,
  Pagination,
  Modal,
  CreateClientForm,
  Client,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllClients } from "../features/Clients";

let pageSize = 6;

function Clients() {
  const dispatch = useDispatch();
  const { clientList, filteredClients } = useSelector((state) => state.clients);

  const modalRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [term, setTerm] = useState(null);
  const [letter, setLetter] = useState(null);
  const [numberOfClients, setNumberOfClients] = useState(clientList.length);

  useEffect(() => {
    dispatch(
      getAllClients({
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
      getAllClients({
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
      getAllClients({
        currentPage: currentPage,
        pageSize: pageSize,
        term: null,
        letter: letter,
      })
    );
    console.log(clientList);
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
        <i className="ico clients"></i>Clients
      </h2>
      <div className="grey-box-wrap reports">
        <a className="link new-member-popup" onClick={openModal}>
          Create new client
        </a>
        <div className="search-page">
          <input
            defaultValue=""
            type="search"
            name="search-clients"
            className="in-search"
            onChange={(e) => {
              setTerm(e?.target?.value);
              console.log(term);
            }}
          />
        </div>
      </div>

      <LetterButtonsContainer onSetLetter={(letter) => setLetter(letter)} />
      <div className="accordion-wrap projects">
        {filteredClients.map((client) => (
          <Client id={client.id} key={client.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={numberOfClients}
        pageSize={pageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
      <Modal ref={modalRef}>
        <CreateClientForm close={closeModal} />
      </Modal>
    </>
  );
}

export default Clients;

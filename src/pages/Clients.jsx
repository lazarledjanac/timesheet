import React, { useEffect, useRef } from "react";
import {
  ClientLetterButtonsContainer,
  Pagination,
  Modal,
  CreateClientForm,
  Client,
  ClientSearchInput,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllClients, setCurrentPage } from "../features/Clients";

function Clients() {
  const dispatch = useDispatch();
  const { clientList, filteredClients, letter, term, currentPage, pageSize } =
    useSelector((store) => store.clients);

  const modalRef = useRef();

  useEffect(() => {
    dispatch(getAllClients());
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
        totalCount={clientList.length}
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
        <i className="ico clients"></i>Clients
      </h2>
      <div className="grey-box-wrap reports ico-member">
        <a className="link new-member-popup test" onClick={openModal}>
          <span>Create new client</span>
        </a>
        <ClientSearchInput />
      </div>
      <ClientLetterButtonsContainer />
      <div className="accordion-wrap projects">
        {filteredClients.map((client) => (
          <Client id={client.id} key={client.id} />
        ))}
      </div>
      {pagination}
      <Modal ref={modalRef}>
        <CreateClientForm close={closeModal} />
      </Modal>
    </>
  );
}

export default Clients;

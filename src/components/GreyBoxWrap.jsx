import React, { useRef } from "react";
import { ClientSearchInput, SearchInput } from "../components";

const GreyBoxWrap = ({ project, client, member }) => {
  let title;
  let input;
  if (project) {
    title = "project";
    input = <SearchInput />;
  }
  if (client) {
    title = "client";
    input = <ClientSearchInput />;
  }
  if (member) {
    title = "member";
  }
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };
  return (
    <div className="grey-box-wrap reports">
      <a className="link new-member-popup" onClick={openModal}>
        Create new {title}
      </a>
      {input}
    </div>
  );
};

export default GreyBoxWrap;

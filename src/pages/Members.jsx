import React, { useRef, useState, useEffect } from "react";
import { Modal, Pagination, Member, Form } from "../components";
import { useSelector, useDispatch } from "react-redux";

let pageSize = 3;

export default function Members() {
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.members.value);

  const [numberOfMembers, setNumberOfMembers] = useState(memberList.length);
  const [currentPage, setCurrentPage] = useState(1);
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  // useEffect(() => {
  //   dispatch(
  //     getAllMembers({
  //       currentPage: currentPage,
  //       pageSize: pageSize,
  //     })
  //   );
  // }, [currentPage]);

  return (
    <>
      <h2>
        <i className="ico team-member"></i>Members
      </h2>
      <div className="grey-box-wrap reports ico-member">
        <a className="link new-member-popup test" onClick={openModal}>
          <span>Create new member</span>
        </a>
      </div>
      <div className="accordion-wrap">
        {memberList.map((member) => (
          <Member id={member.id} key={member.id} />
        ))}
      </div>
      <Pagination
        className="pagination"
        currentPage={currentPage}
        totalCount={numberOfMembers}
        pageSize={pageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
      <Modal ref={modalRef}>
        <Form isMember={true} close={closeModal} />
      </Modal>
    </>
  );
}

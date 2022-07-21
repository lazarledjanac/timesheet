import React, { useRef, useState, useEffect } from "react";
import { Modal, Pagination, Details, Form } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllMembers } from "../features/Members";

let pageSize = 3;

function Members() {
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
  useEffect(() => {
    dispatch(
      getAllMembers({
        currentPage: currentPage,
        pageSize: pageSize,
      })
    );
  }, [currentPage]);

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
        {memberList.map((member, index) => (
          <Details
            id={member.id}
            member={member.name}
            hoursPerWeek={member.hoursPerWeek}
            userName={member.userName}
            email={member.email}
            status={member.status}
            role={member.role}
            key={index}
          />
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

export default Members;

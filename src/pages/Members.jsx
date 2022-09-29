import React, { useRef, useEffect } from "react";
import { Modal, Pagination, Member, CreateMemberForm } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllMembers, setCurrentPage } from "../features/Members";

export default function Members() {
  const dispatch = useDispatch();
  const { memberList, paginatedMembers, currentPage, pageSize } = useSelector(
    (store) => store.members
  );

  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  useEffect(() => {
    dispatch(getAllMembers());
  }, [currentPage, memberList.length]);

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
        {paginatedMembers.map((member) => (
          <Member id={member.id} key={member.id} />
        ))}
      </div>
      <Pagination
        className="pagination"
        currentPage={currentPage}
        totalCount={memberList.length}
        pageSize={pageSize}
        onPageChange={(page) => {
          dispatch(setCurrentPage(page));
        }}
      />
      <Modal ref={modalRef}>
        <CreateMemberForm close={closeModal} />
      </Modal>
    </>
  );
}

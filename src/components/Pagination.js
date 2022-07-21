import React from "react";
import { usePagination, DOTS } from "../usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pagination">
      <ul>
        <li
          className={
            currentPage === 1 ? "pagination-item-disabled" : "pagination-item"
          }
          onClick={onPrevious}
        >
          Previous
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item" key={pageNumber}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className="pagination-item"
              selected={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={
            currentPage === lastPage
              ? "pagination-item-disabled"
              : "pagination-item"
          }
          onClick={onNext}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

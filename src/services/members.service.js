import { membersMock } from "../mock/members.mock";

export const getAllMembers = (currentPage, pageSize) => {
  let results = [];

  const members = membersMock;
  const numberOfMembers = members.length || 0;

  results = members;
  if (numberOfMembers > pageSize) {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    results = results.slice(firstPageIndex, lastPageIndex);
  }

  return {
    results,
    numberOfMembers,
  };
};

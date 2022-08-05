import { createSlice } from "@reduxjs/toolkit";

import { membersMock } from "../mock/members.mock";

const initialState = {
  memberList: membersMock,
  paginatedMembers: [],
  currentPage: 1,
  pageSize: 6,
};

export const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addMember: (state, { payload }) => {
      state.memberList.push(payload);
    },
    deleteMember: (state, { payload }) => {
      state.paginatedMembers = state.paginatedMembers.filter(
        (member) => member.id !== payload.id
      );
      state.memberList = state.memberList.filter(
        (member) => member.id !== payload.id
      );
    },
    updateMember: (state, { payload }) => {
      const { id, name, hoursPerWeek, userName, email } = payload;
      state.memberList.map((member) => {
        if (member.id === id) {
          member.name = name;
          member.hoursPerWeek = hoursPerWeek;
          member.userName = userName;
          member.email = email;
        }
      });
    },
    getAllMembers: (state, { payload }) => {
      if (state.memberList.length > state.pageSize) {
        const firstPageIndex = (state.currentPage - 1) * state.pageSize;
        const lastPageIndex = firstPageIndex + state.pageSize;

        state.paginatedMembers = state.memberList.slice(
          firstPageIndex,
          lastPageIndex
        );
      }
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});
export const {
  addMember,
  deleteMember,
  updateMember,
  getAllMembers,
  setCurrentPage,
} = memberSlice.actions;
export default memberSlice.reducer;

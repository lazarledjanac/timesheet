import { createSlice } from "@reduxjs/toolkit";

import { membersMock } from "../mock/members.mock";

const initialState = {
  memberList: membersMock,
  paginatedMembers: [],
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
          //   member.status = action.payload.status;
          //   member.role = action.payload.role;
        }
      });
    },
    getAllMembers: (state, { payload }) => {
      const { currentPage, pageSize } = payload;
      if (state.memberList.length > pageSize) {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;

        state.paginatedMembers = state.memberList.slice(
          firstPageIndex,
          lastPageIndex
        );
      }
    },
  },
});
export const { addMember, deleteMember, updateMember, getAllMembers } =
  memberSlice.actions;
export default memberSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { membersMock } from "../mock/members.mock";

const initialState = membersMock;

export const memberSlice = createSlice({
  name: "members",
  initialState: { value: initialState },
  reducers: {
    addMember: (state, action) => {
      state.value.push(action.payload);
    },
    deleteMember: (state, action) => {
      state.value = state.value.filter(
        (member) => member.id !== action.payload.id
      );
    },
    updateMember: (state, action) => {
      state.value.map((member) => {
        if (member.id === action.payload.id) {
          member.name = action.payload.memberName;
          member.hoursPerWeek = action.payload.hoursPerWeek;
          member.userName = action.payload.userName;
          member.email = action.payload.email;
          //   member.status = action.payload.status;
          //   member.role = action.payload.role;
        }
      });
    },
    getAllMembers: (state, action) => {
      if (state.value.length > action.payload.pageSize) {
        const firstPageIndex =
          (action.payload.currentPage - 1) * action.payload.pageSize;
        const lastPageIndex = firstPageIndex + action.payload.pageSize;

        state.value = state.value.slice(firstPageIndex, lastPageIndex);
      }
    },
  },
});
export const { addMember, deleteMember, updateMember, getAllMembers } =
  memberSlice.actions;
export default memberSlice.reducer;

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
    updateMember: (state, { payload }) => {
      const { id, name, hoursPerWeek, userName, email } = payload;
      state.value.map((member) => {
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
    // getAllMembers: (state, action) => {
    //   if (state.value.length > action.payload.pageSize) {
    //     const firstPageIndex =
    //       (action.payload.currentPage - 1) * action.payload.pageSize;
    //     const lastPageIndex = firstPageIndex + action.payload.pageSize;

    //     state.value = state.value.slice(firstPageIndex, lastPageIndex);
    //   }
    // },
  },
});
export const { addMember, deleteMember, updateMember, getAllMembers } =
  memberSlice.actions;
export default memberSlice.reducer;

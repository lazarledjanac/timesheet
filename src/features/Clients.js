import { createSlice } from "@reduxjs/toolkit";

import { clientsMock } from "../mock/clients.mock";

const initialState = clientsMock;

export const clientSlice = createSlice({
  name: "clients",
  initialState: { value: initialState },
  reducers: {
    addClient: (state, action) => {
      state.value.push(action.payload);
    },
    deleteClient: (state, action) => {
      state.value = state.value.filter(
        (client) => client.id !== action.payload.id
      );
    },
    updateClient: (state, action) => {
      state.value.map((client) => {
        if (client.id === action.payload.id) {
          client.name = action.payload.clientName;
          client.address = action.payload.address;
          client.city = action.payload.city;
          client.postalCode = action.payload.postalCode;
          client.country = action.payload.country;
        }
      });
    },
    getAllClients: (state, action) => {
      if (action.payload.term) {
        state.value = initialState;
        state.value = state.value.filter(
          (client) =>
            client.name.toLowerCase().indexOf(action.payload.term) !== -1
        );
      } else if (action.payload.letter) {
        state.value = initialState;
        state.value = state.value.filter((client) =>
          client.name.toLowerCase().startsWith(action.payload.letter)
        );
      } else {
        state.value = initialState;
      }

      if (state.value.length > action.payload.pageSize) {
        const firstPageIndex =
          (action.payload.currentPage - 1) * action.payload.pageSize;
        const lastPageIndex = firstPageIndex + action.payload.pageSize;

        state.value = state.value.slice(firstPageIndex, lastPageIndex);
      }
    },
  },
});
export const { addClient, deleteClient, updateClient, getAllClients } =
  clientSlice.actions;
export default clientSlice.reducer;

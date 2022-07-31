import { createSlice } from "@reduxjs/toolkit";

import { clientsMock } from "../mock/clients.mock";

const initialState = {
  clientList: clientsMock,
  paginatedClients: [],
  filteredClients: [],
};

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient: (state, { payload }) => {
      state.clientList.push(payload);
    },
    deleteClient: (state, { payload }) => {
      state.filteredClients = state.filteredClients.filter(
        (client) => client.id !== payload.id
      );
      state.clientList = state.clientList.filter(
        (client) => client.id !== payload.id
      );
    },
    updateClient: (state, { payload }) => {
      const { id, name, address, city, postalCode, country } = payload;
      state.clientList.map((client) => {
        if (client.id === id) {
          client.name = name;
          client.address = address;
          client.city = city;
          client.postalCode = postalCode;
          client.country = country;
        }
      });
    },
    getAllClients: (state, { payload }) => {
      const { currentPage, pageSize, term, letter } = payload;
      if (state.clientList.length > pageSize) {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;

        state.paginatedClients = state.clientList.slice(
          firstPageIndex,
          lastPageIndex
        );
      }
      if (term) {
        state.filteredClients = state.clientList.filter(
          (client) => client.name.toLowerCase().indexOf(term) !== -1
        );
      } else if (letter) {
        state.filteredClients = state.clientList.filter((client) =>
          client.name.toLowerCase().startsWith(letter)
        );
      } else {
        state.filteredClients = state.paginatedClients;
      }
    },
  },
});
export const { addClient, deleteClient, updateClient, getAllClients } =
  clientSlice.actions;
export default clientSlice.reducer;

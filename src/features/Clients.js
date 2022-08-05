import { createSlice } from "@reduxjs/toolkit";

import { clientsMock } from "../mock/clients.mock";

let letters = [];
for (let i = 97; i < 123; i++) {
  letters.push({ id: i });
}

const initialState = {
  clientList: clientsMock,
  paginatedClients: [],
  filteredClients: [],
  letter: null,
  letters,
  term: null,
  currentPage: 1,
  pageSize: 6,
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
    getAllClients: (state) => {
      if (state.clientList.length > state.pageSize) {
        const firstPageIndex = (state.currentPage - 1) * state.pageSize;
        const lastPageIndex = firstPageIndex + state.pageSize;

        state.paginatedClients = state.clientList.slice(
          firstPageIndex,
          lastPageIndex
        );
      }
      if (state.term) {
        state.letter = null;
        state.filteredClients = state.clientList.filter(
          (client) => client.name.toLowerCase().indexOf(state.term) !== -1
        );
      } else if (state.letter) {
        state.filteredClients = state.clientList.filter((client) =>
          client.name
            .toLowerCase()
            .startsWith(String.fromCharCode(state.letter))
        );
      } else {
        state.filteredClients = state.paginatedClients;
      }
    },
    toggleActiveLetter: (state, { payload }) => {
      state.term = "";
      if (payload === state.letter) {
        state.letter = null;
      } else {
        state.letter = payload;
      }
    },
    setTerm: (state, { payload }) => {
      state.term = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});
export const {
  addClient,
  deleteClient,
  updateClient,
  getAllClients,
  toggleActiveLetter,
  setTerm,
  setCurrentPage,
} = clientSlice.actions;
export default clientSlice.reducer;

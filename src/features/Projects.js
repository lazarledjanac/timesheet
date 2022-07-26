import { createSlice } from "@reduxjs/toolkit";

import { projectsMock } from "../mock/projects.mock";

let letters = [];
for (let i = 97; i < 123; i++) {
  letters.push({ id: i });
}

const initialState = {
  projectList: projectsMock,
  paginatedProjects: [],
  filteredProjects: [],
  letter: null,
  letters,
  term: null,
  currentPage: 1,
  pageSize: 6,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, { payload }) => {
      state.projectList.push(payload);
    },
    deleteProject: (state, { payload }) => {
      state.filteredProjects = state.filteredProjects.filter(
        (project) => project.id !== payload.id
      );
      state.projectList = state.projectList.filter(
        (project) => project.id !== payload.id
      );
    },
    updateProject: (state, { payload }) => {
      const { id, name, description, client, lead } = payload;
      state.projectList.map((project) => {
        if (project.id === id) {
          project.name = name;
          project.description = description;
          project.client = client;
          project.lead = lead;
        }
      });
    },
    getAllProjects: (state) => {
      if (state.projectList.length > state.pageSize) {
        const firstPageIndex = (state.currentPage - 1) * state.pageSize;
        const lastPageIndex = firstPageIndex + state.pageSize;
        state.paginatedProjects = state.projectList.slice(
          firstPageIndex,
          lastPageIndex
        );
      }
      if (state.term) {
        state.letter = null;
        state.filteredProjects = state.projectList.filter(
          (project) => project.name.toLowerCase().indexOf(state.term) !== -1
        );
      } else if (state.letter) {
        state.filteredProjects = state.projectList.filter((project) =>
          project.name
            .toLowerCase()
            .startsWith(String.fromCharCode(state.letter))
        );
      } else {
        state.filteredProjects = state.paginatedProjects;
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
  addProject,
  deleteProject,
  updateProject,
  getAllProjects,
  toggleActiveLetter,
  setTerm,
  setCurrentPage,
} = projectSlice.actions;
export default projectSlice.reducer;

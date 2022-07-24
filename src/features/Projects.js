import { createSlice } from "@reduxjs/toolkit";

import { projectsMock } from "../mock/projects.mock";

const initialState = {
  projectList: projectsMock,
  paginatedProjects: [],
  filteredProjects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, { payload }) => {
      state.projectList.push(payload);
    },
    deleteProject: (state, { payload }) => {
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
    getAllProjects: (state, { payload }) => {
      const { currentPage, pageSize, term, letter } = payload;
      if (state.projectList.length > pageSize) {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;

        state.paginatedProjects = state.projectList.slice(
          firstPageIndex,
          lastPageIndex
        );
      }
      if (term) {
        state.filteredProjects = state.projectList.filter(
          (project) => project.name.toLowerCase().indexOf(term) !== -1
        );
      } else if (letter) {
        state.filteredProjects = state.projectList.filter((project) =>
          project.name.toLowerCase().startsWith(letter)
        );
      } else {
        state.filteredProjects = state.paginatedProjects;
      }
    },
  },
});
export const { addProject, deleteProject, updateProject, getAllProjects } =
  projectSlice.actions;
export default projectSlice.reducer;

// export const getAllProjects = (currentPage = 1, pageSize = 5, term, letter) => {
//   let results = [];

//   const projects = projectsMock;
//   const numOfProjects = projects.length || 0;

//   if (term) {
//     results = projectsMock.filter((project) => {
//       return project.name.toLowerCase().indexOf(term) !== -1;
//     });
//   } else if (letter) {
//     results = projects.filter((project) =>
//       project.name.toLowerCase().startsWith(letter)
//     );
//   } else {
//     results = projects;
//   }

//   if (results.length > pageSize) {
//     const firstPageIndex = (currentPage - 1) * pageSize;
//     const lastPageIndex = firstPageIndex + pageSize;

//     results = results.slice(firstPageIndex, lastPageIndex);
//   }

//   return {
//     results,
//     numOfProjects,
//   };
// };

// export const searchProjects = (term) => {
//   return projectsMock.filter((project) => {
//     return project.name.toLowerCase().indexOf(term) !== -1;
//   });
// };

// export const filterProjects = (letter) => {
//   const projects = projectsMock;

//   const filteredProjects = projects.filter((project) =>
//     project.name.toLowerCase().startsWith(letter)
//   );
//   return filteredProjects;
// };

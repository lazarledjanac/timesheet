import { createSlice } from "@reduxjs/toolkit";

import { projectsMock } from "../mock/projects.mock";

const initialState = projectsMock;

export const projectSlice = createSlice({
  name: "projects",
  initialState: { value: initialState },
  reducers: {
    addProject: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.value = state.value.filter(
        (project) => project.id !== action.payload.id
      );
    },
    updateProject: (state, { payload }) => {
      const { id, name, description, client, lead } = payload;
      state.value.map((project) => {
        if (project.id === id) {
          project.name = name;
          project.description = description;
          project.client = client;
          project.lead = lead;
        }
      });
    },
    getAllProjects: (state, action) => {
      if (action.payload.term) {
        state.value = initialState;
        state.value = state.value.filter(
          (project) =>
            project.name.toLowerCase().indexOf(action.payload.term) !== -1
        );
      } else if (action.payload.letter) {
        state.value = initialState;
        state.value = state.value.filter((project) =>
          project.name.toLowerCase().startsWith(action.payload.letter)
        );
      } else {
        state.value = initialState;
      }

      if (state.value.length > action.payload.pageSize) {
        const firstPageIndex =
          (action.payload.currentPage - 1) * action.payload.pageSize;
        const lastPageIndex = firstPageIndex + action.payload.pageSize;

        // state.value = state.value.slice(firstPageIndex, lastPageIndex);
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

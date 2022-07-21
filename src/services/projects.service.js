import { projectsMock } from "../mock/projects.mock";

export const getAllProjects = (currentPage = 1, pageSize = 5, term, letter) => {
  let results = [];

  const projects = projectsMock;
  const numOfProjects = projects.length || 0;

  if (term) {
    results = projectsMock.filter((project) => {
      return project.name.toLowerCase().indexOf(term) !== -1;
    });
  } else if (letter) {
    results = projects.filter((project) =>
      project.name.toLowerCase().startsWith(letter)
    );
  } else {
    results = projects;
  }

  if (results.length > pageSize) {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    results = results.slice(firstPageIndex, lastPageIndex);
  }

  return {
    results,
    numOfProjects,
  };
};

export const searchProjects = (term) => {
  return projectsMock.filter((project) => {
    return project.name.toLowerCase().indexOf(term) !== -1;
  });
};

export const filterProjects = (letter) => {
  const projects = projectsMock;

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().startsWith(letter)
  );
  return filteredProjects;
};

export const createNewProject = () => {};
export const deleteProject = () => {};
export const saveProject = () => {};

import { clientsMock } from "../mock/clients.mock";
export const getAllClientss = () => {
  return clientsMock;
};
export const getAllClients = (currentPage = 1, pageSize = 5, term, letter) => {
  let results = [];

  const clients = clientsMock;
  const numOfClients = clients.length || 0;

  if (term) {
    results = clientsMock.filter((client) => {
      return client.name.toLowerCase().indexOf(term) !== -1;
    });
  } else if (letter) {
    results = clients.filter((client) =>
      client.name.toLowerCase().startsWith(letter)
    );
  } else {
    results = clients;
  }

  if (results.length > pageSize) {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    results = results.slice(firstPageIndex, lastPageIndex);
  }

  return {
    results,
    numOfClients,
  };
};
export const searchClients = (term) => {
  return clientsMock.filter((client) => {
    return client.name.toLowerCase().indexOf(term) !== -1;
  });
};

export const filterClients = (letter) => {
  const clients = clientsMock;

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().startsWith(letter)
  );
  return filteredClients;
};

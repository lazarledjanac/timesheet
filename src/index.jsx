import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import projectsReducer from "./features/Projects";
import clientsReducer from "./features/Clients";
import membersReducer from "./features/Members";
import reportsReducer from "./features/Reports";
import { countryApi } from "./features/CountryApi";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    clients: clientsReducer,
    members: membersReducer,
    reports: reportsReducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

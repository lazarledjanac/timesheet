import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import TimeSheet from "./pages/TimeSheet";
import Clients from "./pages/Clients";
import Projects from "./pages/Projects";
import Categories from "./pages/Categories";
import Members from "./pages/Members";
import Reports from "./pages/Reports";
import UnfoundPage from "./pages/UnfoundPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="timesheet" element={<TimeSheet />} />
      <Route path="clients" element={<Clients />} />
      <Route path="projects" element={<Projects />} />
      <Route path="categories" element={<Categories />} />
      <Route path="members" element={<Members />} />
      <Route path="reports" element={<Reports />} />
      <Route
      path="*"
      element={<UnfoundPage/>}
    />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


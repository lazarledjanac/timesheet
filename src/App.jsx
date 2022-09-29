import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  TimeSheet,
  Clients,
  Projects,
  Members,
  Reports,
  UnfoundPage,
  Days,
} from "./pages";
import { PDF } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="timesheet/*" element={<TimeSheet />} />
          <Route path="clients" element={<Clients />} />
          <Route path="projects" element={<Projects />} />
          <Route path="members" element={<Members />} />
          <Route path="reports" element={<Reports />} />
          <Route path="/days/:date" element={<Days />} />
          <Route path="/timesheet/:month" element={<TimeSheet />} />
          <Route path="/" element={<TimeSheet />} />
          <Route path="/reports/createPDF" element={<PDF />} />
          <Route path="*" element={<UnfoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

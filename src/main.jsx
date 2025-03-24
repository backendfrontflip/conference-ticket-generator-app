import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TicketPage from "./pages/TicketPage";
import DisplayDataPage from "./pages/DisplayDataPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TicketPage />} />
        <Route path="/ticket" element={<DisplayDataPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

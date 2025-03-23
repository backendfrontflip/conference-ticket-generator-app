import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TicketPage from '../src/pages/TicketPage';
import DisplayDataPage from '../src/pages/DisplayDataPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketPage />} />
        <Route path="/ticket" element={<DisplayDataPage />} />
      </Routes>
    </Router>
  );
};

export default App;

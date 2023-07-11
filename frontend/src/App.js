import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './components/Form/Form';
import LogsTable from './components/LogsTable/LogsTable';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Submission form</Link>
            </li>
            <li>
              <Link to="/logs">Log history</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/logs" element={<LogsTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

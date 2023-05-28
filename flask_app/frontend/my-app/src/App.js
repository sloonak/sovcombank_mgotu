import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';
import RegisterCo from './RegisterCo';
import ResumeCo from './ResumeCo';
import Resume from './Resume';
import TestTitle from './TestTitle';
import Profile from './Profile';
import TestScale from './TestScale';
import TestCreate from './TestCreate';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register/" element={<Register />} />
            <Route path="/registerCo/" element={<RegisterCo />} />
            <Route path="/resumeCo/" element={<ResumeCo />} />
            <Route path="/resume/" element={<Resume />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/testTitle/" element={<TestTitle />} />
            <Route path="/testScale/:id" element={<TestScale />} />
            <Route path="/testCreate/:id" element={<TestCreate />} />
        </Routes>
    </Router>
  );
}

export default App;


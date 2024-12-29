// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeedbackDashboard from './components/FeedbackDashboard';
import AddFeedbackForm from './components/AddFeedbackForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedbackDashboard />} />
        <Route path="/add-feedback" element={<AddFeedbackForm />} />
      </Routes>
    </Router>
  );
};

export default App;
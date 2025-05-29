import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryListing from './api/Pages/CategoryListing';
import PhotographerProfilePage from './api/Pages/PhotographerProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryListing />} />
        <Route path="/profile/:id" element={<PhotographerProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

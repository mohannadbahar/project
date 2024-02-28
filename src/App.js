
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import CategoriesPage from './HomePage';

import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <CategoriesPage />
        <Routes>
     
          <Route path="/HomePage" element={<CategoriesPage />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

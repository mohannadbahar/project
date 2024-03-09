import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CategoriesPage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Navbar from './Navbar';
import ProductPage from './ProductPage';

const App = () => {
  return (
    <Router>
      <div>
       
        <Navbar />
        
        <Routes>
          {/* Define your routes */}
          <Route path="/HomePage" element={<CategoriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/categories/:categoryId" element={<ProductPage />} />
     

        </Routes>
      </div>
    </Router>
  );
}

export default App;

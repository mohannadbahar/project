import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './Navbar';
import HomePage from './HomePage';
import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import OrdersPage from './OrdersPage';
import UserProfilePage from './UserProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrdersPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

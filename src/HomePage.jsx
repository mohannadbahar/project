
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Categories from './Categories';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-node4.vercel.app/categories/')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
   
    
    
    
      <h1>Welcome to Our Store!</h1>
      <Categories categories={categories} />
    </div>
  );
}

export default HomePage;

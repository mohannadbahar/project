
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-node4.vercel.app/categories/')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map(category => (
          <Link key={category._id} to={`/categories/${category._id}`}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;

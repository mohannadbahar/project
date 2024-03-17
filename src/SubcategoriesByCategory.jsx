import React, { useState, useEffect } from 'react';

function SubcategoriesByCategory({ categoryId }) {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubcategoriesByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${categoryId}/subcategory`);

        if (!response.ok) {
          throw new Error('Failed to fetch subcategories by category');
        }

        const data = await response.json();
        setSubcategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSubcategoriesByCategory();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Subcategories for this Category</h2>
      <ul>
        {subcategories.map(subcategory => (
          <li key={subcategory._id}>
            <p>Name: {subcategory.name}</p>
            <img src={subcategory.image} alt={subcategory.name} />
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubcategoriesByCategory;

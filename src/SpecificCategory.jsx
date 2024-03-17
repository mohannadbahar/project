import React, { useState, useEffect } from 'react';

function SpecificCategory({ categoryId }) {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`https://ecommerce-node4.vercel.app/categories/${categoryId}`, {
          headers: {
            Authorization: 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjRmMzJmMzM2NGFkNjY0NWE3ODY3MiIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAxMTE0ODc4fQ.xQgD48OZrstfqWL96BDdLUxpoX85wXphWHlvjkm-0qE',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch category');
        }

        const data = await response.json();
        setCategory(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Category Details</h2>
      <p>Name: {category.name}</p>
      <p>Description: {category.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default SpecificCategory;

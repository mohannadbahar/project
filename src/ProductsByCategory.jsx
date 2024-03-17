import React, { useState, useEffect } from 'react';

function ProductsByCategory({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`https://ecommerce-node4.vercel.app/products/category/${categoryId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch products by category');
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Products in this Category</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <img src={product.mainImage} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsByCategory;

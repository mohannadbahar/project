import React, { useState, useEffect } from 'react';

const ProductPage = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId) {
      setLoading(true); 
      fetch(`https://ecommerce-node4.vercel.app/products/category/${categoryId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          return response.json();
        })
        .then(data => {
          setProducts(data.products);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false); 
        });
    } else {
      setLoading(false); 
    }
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!categoryId) {
    return <div>Please select a category</div>; 
  }

  if (products.length === 0) {
    return <div>No products available for this category</div>; 
  }

  return (
    <div>
      <h1>Products for Category: {categoryId}</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;

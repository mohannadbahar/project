import React, { useState, useEffect } from 'react';

function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://ecommerce-node4.vercel.app/products/${productId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.mainImage} alt={product.name} />
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetail;

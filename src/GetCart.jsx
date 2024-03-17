import React, { useState, useEffect } from 'react';

function GetCart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('https://ecommerce-node4.vercel.app/cart', {
          headers: {
            'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZlYTk4Y2FmNDlmODJiM2IxNGRjNSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAyMjU2NDU4fQ.HE5CSCxRVvYKCqGK7fHGudNSdQdEMKTg6YrnoEtWU7Q',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }

        const data = await response.json();
        setCartItems(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>
            Product ID: {item.productId}
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetCart;

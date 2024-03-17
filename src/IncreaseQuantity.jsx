import React, { useState } from 'react';

function IncreaseQuantity() {
  const [productId, setProductId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIncreaseQuantity = async () => {
    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/cart/increaseQuantity', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZlYTk4Y2FmNDlmODJiM2IxNGRjNSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAyMjU2NDU4fQ.HE5CSCxRVvYKCqGK7fHGudNSdQdEMKTg6YrnoEtWU7Q',
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to increase quantity');
      }

      setSuccessMessage('Quantity increased successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
      <button onClick={handleIncreaseQuantity}>Increase Quantity</button>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default IncreaseQuantity;

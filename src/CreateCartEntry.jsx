import React, { useState } from 'react';

function CreateCartEntry() {
  const [productId, setProductId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZlYTk4Y2FmNDlmODJiM2IxNGRjNSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAyNTAxNDUwfQ.foXYXeaR6Ng_lMId2u5jBlr-gtWkx6Y96Ha_dgkz9tQ',
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create cart entry');
      }

      setSuccessMessage('Cart entry created successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Create Cart Entry</button>
    </form>
  );
}

export default CreateCartEntry;

import React, { useState } from 'react';

function RemoveCartItem() {
  const [productId, setProductId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/cart/removeItem', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTUxOTIxM2QyNWQ4NDc2NDM2NjdkOSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAwMDc2Nzk4fQ.ou7UeprOYF2GBPeGTURm0gfSXTSgiQhblcbFuGX8bnA',
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      setSuccessMessage('Item removed from cart successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Remove Item from Cart</button>
    </form>
  );
}

export default RemoveCartItem;

import React, { useState } from 'react';

function ClearCart() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClearCart = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart/clear', {
        method: 'PATCH',
        headers: {
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZlYTk4Y2FmNDlmODJiM2IxNGRjNSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAxODkxNjYwfQ.-XlhcCILJvhSasCl7HohQvFezIIERupfJtKvnCeEaF8',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }

      setSuccessMessage('Cart cleared successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleClearCart}>Clear Cart</button>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default ClearCart;

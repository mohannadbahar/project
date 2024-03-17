import React, { useState } from 'react';

function CancelOrder({ orderId, authToken }) {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCancelOrder = async () => {
    try {
      const response = await fetch(`https://ecommerce-node4.vercel.app/order/cancel/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to cancel order');
      }

      setSuccessMessage('Order canceled successfully!');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleCancelOrder}>Cancel Order</button>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default CancelOrder;

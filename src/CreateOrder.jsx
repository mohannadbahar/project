import React, { useState } from 'react';

function CreateOrder() {
  const [couponName, setCouponName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateOrder = async () => {
    try {
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZlYTk4Y2FmNDlmODJiM2IxNGRjNSIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAxODkxNjYwfQ.-XlhcCILJvhSasCl7HohQvFezIIERupfJtKvnCeEaF8',
        },
        body: JSON.stringify({
          couponName,
          address,
          phone,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      setSuccessMessage('Order created successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <input type="text" value={couponName} onChange={(e) => setCouponName(e.target.value)} placeholder="Coupon Name" required />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <button onClick={handleCreateOrder}>Create Order</button>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default CreateOrder;

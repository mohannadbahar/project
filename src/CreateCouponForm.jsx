import React, { useState } from 'react';

function CreateCouponForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [expireDate, setExpireDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          amount,
          expireDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create coupon');
      }

      setSuccessMessage('Coupon created successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Coupon Name" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="date" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} placeholder="Expiration Date" required />
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Create Coupon</button>
    </form>
  );
}

export default CreateCouponForm;

import React, { useState } from 'react';

function SendCodeForm() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendCodeData = {
      email,
    };

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/auth/sendcode', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendCodeData),
      });

      if (!response.ok) {
        throw new Error('Failed to send code');
      }

      setSuccessMessage('Code sent successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Send Code</button>
    </form>
  );
}

export default SendCodeForm;

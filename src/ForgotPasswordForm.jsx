import React, { useState } from 'react';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resetPasswordData = {
      email,
      password,
      code,
    };

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/auth/forgotPassword', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetPasswordData),
      });

      if (!response.ok) {
        throw new Error('Failed to reset password');
      }

      setSuccessMessage('Password reset successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" required />
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Verification Code" required />
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ForgotPasswordForm;

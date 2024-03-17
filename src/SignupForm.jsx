import React, { useState } from 'react';

function SignupForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/auth/signup', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      // Handle successful signup
    } catch (err) {
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" required />
      {error && <div>{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;

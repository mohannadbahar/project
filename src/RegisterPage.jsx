// RegisterPage.js
import React, { useState } from 'react';
import styles from './RegisterForm.module.css'; // Assuming you have a CSS module for styling

const RegisterPage = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

 
  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Registering...');
  };

  return (
    <div className={styles['register-form-container']}>
      <h2 className={styles['register-form-title']}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="email" className={styles['form-label']}>Email:</label>
          <input
            type="email"
            id="email"
            className={styles['form-input']}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password" className={styles['form-label']}>Password:</label>
          <input
            type="password"
            id="password"
            className={styles['form-input']}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="confirmPassword" className={styles['form-label']}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className={styles['form-input']}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      
        <button type="submit" className={styles['form-button']}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;

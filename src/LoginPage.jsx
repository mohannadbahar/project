
import React from 'react';
import styles from './LoginForm.module.css';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className={styles['login-form-container']}>
      <h2 className={styles['login-form-title']}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="email" className={styles['form-label']}>Email:</label>
          <input type="email" id="email" className={styles['form-input']} required />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password" className={styles['form-label']}>Password:</label>
          <input type="password" id="password" className={styles['form-input']} required />
        </div>
        <button type="submit" className={styles['form-button']}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

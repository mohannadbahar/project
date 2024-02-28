
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}></Link>
      <ul className={styles['navbar-links']}> 
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      <div className={styles['user-section']}> 
        <input type="text" className={styles['search-input']} placeholder="Search" /> 
        <div className={styles['user-avatar']}></div> 
        <span className={styles['user-name']}></span> 
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import styles from './Categories.module.css';

const CategoryCard = ({ category }) => {
  return (
    <div className={styles['category-card']}>
      <img src={category.image.secure_url} alt={category.name} className={styles['category-image']} />
      <h3 className={styles['category-name']}>{category.name}</h3>
      <p className={styles['category-description']}>{category.description}</p>
    </div>
  );
}

export default CategoryCard;
import React, { useState } from 'react';

function CreateSubcategoryForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('categoryId', categoryId);

    try {
      const response = await fetch('http://localhost:3000/subcategory', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create subcategory');
      }

      setSuccessMessage('Subcategory created successfully!');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Subcategory Name" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
      <input type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} placeholder="Category ID" required />
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Create Subcategory</button>
    </form>
  );
}

export default CreateSubcategoryForm;

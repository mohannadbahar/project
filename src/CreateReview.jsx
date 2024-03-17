import React, { useState } from 'react';

function CreateReview({ authToken }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://ecommerce-node4.vercel.app/products/656afed9415e5e5f8d84871f/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
        body: JSON.stringify({
          comment,
          rating: parseInt(rating),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create review');
      }

      // Reset form fields
      setComment('');
      setRating('');
      setLoading(false);
      alert('Review submitted successfully!');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Comment:
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} required />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </label>
        <br />
        <button type="submit" disabled={loading}>Submit Review</button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default CreateReview;

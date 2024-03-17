import React, { useState, useEffect } from 'react';

function UserProfile({ authToken }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('{{url}}/user/profile', {
          headers: {
            'Authorization': authToken,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const profileData = await response.json();
        setProfile(profileData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [authToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {profile.id}</p>
      <p>User Role: {profile.role}</p>
      <p>User Status: {profile.status}</p>
      {/* Add more user profile details as needed */}
    </div>
  );
}

export default UserProfile;

// useEditProfile.js

import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useEditProfile = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const editProfile = async (updatedUserData) => {
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem('token');

    const response = await fetch('/api/user/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUserData),
    });

    try {
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || 'Failed to update user information');
      }

      if (response.ok) {
        // Assuming json.user is an object, you can directly pass it without converting to JSON
        dispatch({ type: 'UPDATE_PROFILE', payload: json.user });

        setIsLoading(false);
      }
    } catch (error) {
      // Handle parsing error, if any
      setIsLoading(false);
      setError('Error parsing server response');
    }
  };

  return { editProfile, isLoading, error };
};

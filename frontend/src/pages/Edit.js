// components/EditProfilePage.js

import React, { useState } from "react";
import { useEditProfile } from "../hooks/useEdit";

const EditProfilePage = ({ user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { editProfile, error, isLoading } = useEditProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the editProfile function with updated user information
    await editProfile({ email,password });
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Save Changes</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EditProfilePage;

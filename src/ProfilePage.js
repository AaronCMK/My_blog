import React, { useState } from 'react';

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [introduction, setIntroduction] = useState('');

  // Function to handle profile picture upload
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can handle the file here, e.g., upload it to a server
      // For this example, we'll just set it in the state
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-picture">
        <label htmlFor="profile-picture-input">
          <img
            src={profilePicture || 'default-profile-image.jpg'}
            alt="Profile"
            className="profile-image"
          />
          <input
            type="file"
            id="profile-picture-input"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </label>
      </div>
      <div className="introduction">
        <textarea
          placeholder="Introduce yourself..."
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProfilePage;

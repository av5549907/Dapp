import React from 'react';
import './FacebookUI.css'; // Create a corresponding CSS file for styling

const FacebookUI = () => {
  return (
    <div className="facebook-ui">
      <div className="profile-sidebar">
        {/* Profile details */}
        <div className="profile-image">
          <img src="https://placekitten.com/100/100" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Web Developer</p>
          {/* Add more profile details as needed */}
        </div>
      </div>
      <div className="feed">
        {/* Facebook-like feed */}
        <div className="post">
          <div className="post-header">
            <img src="https://placekitten.com/40/40" alt="Profile" />
            <div className="post-author">
              <h3>John Doe</h3>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="post-content">
            <p>This is a Facebook-like post.</p>
            {/* Add more post content as needed */}
          </div>
          <div className="post-actions">
            <button>Like</button>
            <button>Comment</button>
          </div>
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>
  );
};

export default FacebookUI;

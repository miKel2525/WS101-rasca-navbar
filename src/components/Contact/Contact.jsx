import React from 'react';
import './Contact.css'; // Make sure the path matches your file structure
import { FaInstagram, FaSpotify, FaTiktok } from 'react-icons/fa'; // Install react-icons if you haven't
import contactVideo from '../../assets/videos/contact-video.mp4';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-text">
          <h1>Socials</h1>

          <div className="social-links">
            <a href="https://www.instagram.com/rexorangecounty?igsh=MWxkY3g5dmhrY241Mw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> Instagram
            </a>
            <a href="https://open.spotify.com/artist/7pbDxGE6nQSZVfiFdq9lOL?si=RO5DQJ70SoKJYbpQsbfJjQ" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="social-icon" /> Spotify
            </a>
            <a href="https://www.tiktok.com/@rex?_t=8q4KgJVr6ZD&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" /> TikTok
            </a>
          </div>
        </div>

        <video className="contact-video" controls>
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Contact;

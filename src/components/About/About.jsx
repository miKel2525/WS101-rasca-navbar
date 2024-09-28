import React from 'react';
import './About.css'; // Ensure this path is correct
import betImage from '../../assets/images/bet.png'; // Ensure the image path is correct
import song1Cover from '../../assets/images/song1.png'; // Example song cover paths
import song2Cover from '../../assets/images/song2.png';
import song3Cover from '../../assets/images/song3.png';

const About = () => {
  return (
    <div className="about-container">
      <h2>Recommended Songs</h2>
      
      <div className="recommended-songs">
        <div className="song-box">
          <a href="https://open.spotify.com/track/7vRia9rlEuTDQxkfXIKySi?si=-NpFLYGAS3qUWmwhKYVd8A" target="_blank" rel="noopener noreferrer">
            <img src={song1Cover} alt="Song 1" className="song-cover" />
            <h3>It's Not The Same Anymore</h3>
          </a>
        </div>
        <div className="song-box">
          <a href="https://open.spotify.com/track/3AbV3JF0bJAZXeHEJZfpke?si=ZdBhtAuzQzqF47KQf_NfkQ" target="_blank" rel="noopener noreferrer">
            <img src={song2Cover} alt="Song 2" className="song-cover" />
            <h3>4 seasons</h3>
          </a>
        </div>
        <div className="song-box">
          <a href="https://open.spotify.com/track/4tVphly4D1PB8tJC9gHMcJ?si=Hb4q4GVLSP-z9RHE320zWg" target="_blank" rel="noopener noreferrer">
            <img src={song3Cover} alt="Song 3" className="song-cover" />
            <h3>10/10</h3>
          </a>
        </div>
      </div>

      <div className="about-content">
        <img src={betImage} alt="Bet" className="about-image" />
        <div className="about-text-box">
          <h1>About Rex Orange County</h1>
          <p>
            Alexander James O'Connor (born 4 May 1998), known professionally as Rex Orange County, 
            is an English singer, songwriter, and multi-instrumentalist. NPR Music's Zoë Jones has 
            described O'Connor's music as "a bright blend of hip-hop, jazz, and bedroom pop."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

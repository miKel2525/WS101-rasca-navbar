import React from 'react';
import './Home.css'; // Ensure this matches the actual file name and casing
import oloImage from '../../assets/images/olo.png'; // Import the first image
import olaImage from '../../assets/images/ola.png'; // Import the new image

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={olaImage} alt="Ola" className="ola-image" /> {/* Replace h1 and h2 with the image */}
      </div>
      <img src={oloImage} alt="Olo" className="home-image" /> {/* Display the second image */}
    </div>
  );
};

export default Home;

import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="home-image-container">
        <img src="img/dot1.jpeg" alt="HardPC" className="home-rounded-image"/>
        <div className="home-text-container">
          <h2>Welcome to HardPC</h2>
          <p>We specialize in custom-built PCs tailored to your needs.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

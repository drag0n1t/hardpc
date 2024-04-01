import React from 'react';

function About() {
  return (
    <div className='about-container'>
      <div className='about-image-container'>
        <img src="img/dot2.png" alt="HardPC" className="about-rounded-image"/>
        <div className='about-text-container'>
          <h2>About HardPC</h2>
          <p>HardPC is a leading provider of custom-built PCs since 2005.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

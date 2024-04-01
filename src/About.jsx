import React from 'react';

function About() {
  return (
    <div className='about-container'>
      <div className='about-image-container'>
        <img src="https://hpc4lvxhausdigeg.public.blob.vercel-storage.com/dot1-1bearsB7m1Pkgmlk8VS4uzs3j2Sjew.jpeg" alt="HardPC" className="about-rounded-image"/>
        <div className='about-text-container'>
          <h2>About HardPC</h2>
          <p>HardPC is a leading provider of custom-built PCs since 2005.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

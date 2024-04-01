import React from 'react';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className="logo-container">
          <img src="https://hpc4lvxhausdigeg.public.blob.vercel-storage.com/Material-Redhat-XGR4kLYs7tmCVOIS8uD4dVKRxVYTQx.png" alt="Logo" className="logo" />
          <h1>HardPC</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
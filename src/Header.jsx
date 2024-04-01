import React from 'react';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className="logo-container">
          <img src="img/Material-Redhat.png" alt="Logo" className="logo" />
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
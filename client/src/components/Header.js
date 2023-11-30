// Header.js
import React from 'react';
import "../css/Header.css";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/treatments">Treatments</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="company-logo.png" alt="Company Logo" />
      </div>
      <div className="user-actions">
        <a href="/signup"><img src="signup-icon.png" alt="Sign Up Icon" /></a>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;

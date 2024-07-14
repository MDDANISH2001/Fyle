import React from 'react';
import header from '../assets/header.png'
// import './Header.css';

function Header({ onContactClick }) {
  return (
    <header className="">
      <div className="header-content header container-sm">
        <div className="header-text">
          <h3>AWARD WINNING</h3>
          <h1>DIGITAL MARKETING AGENCY</h1>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque
            vitae ante et elit fringilla ac at purus, Morbi sed lacus nec risus finibus
            feugiat et fermentum.
          </p>
          <button className="contact-btn" onClick={onContactClick}>Contact Us</button>
        </div>
        <div className="header-image d-lg-block d-none">
          <img src={header} alt="Digital Marketing Agency" />
        </div>
      </div>
    </header>
  );
}

export default Header;

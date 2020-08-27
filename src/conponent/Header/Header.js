import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
          <h1>Online Class</h1>
          <nav>
            <a href="/now">Now</a>
            <a href="/about">About</a>
            <a href="/how">How</a> 
          </nav>
        </div>
    );
};

export default Header;
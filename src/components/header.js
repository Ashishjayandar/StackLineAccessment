import React from 'react';
import logo from '../assets/stackline_logo.svg'; 

const Header = () => {
  return (
    <header style={{ backgroundColor: '#001f3f', padding: '1rem', color: 'white' }}>
      <img src={logo} alt="Stackline Logo" height="40" />
    </header>
  );
}

export default Header;

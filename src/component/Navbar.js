import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='smart'>Smart-Control</h1>
      {/* Copyright notice */}
      <footer className='footer'>
        Copyright &copy; {new Date().getFullYear()} ABC Innovations. All rights reserved
      </footer>
    </nav>
  );
}

export default Navbar;

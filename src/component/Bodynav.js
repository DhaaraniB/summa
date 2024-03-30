// Bodynav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bodynav.css';

const Bodynav = () => {
  const [user, setUser] = useState(true);

  // Function to toggle the user state
  const handleClick = () => {
    setUser(!user);
  }

  return (
    <div className='bodynav'>
      {/* If user is true, link to Register page, otherwise link to Login page */}
      <Link to={user ? '/register' : '/login'} onClick={handleClick} className="link">Login/Signup
        {user ? '' : 'Login'} 
      </Link>
    </div>
  );
}

export default Bodynav;

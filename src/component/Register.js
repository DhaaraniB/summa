import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Register.css';

const Register = () => {
  return (
    <div className='form-content-right' id='frm'>
      <form className='form'>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            type="text"
            name="username"
            className='form-input'
            placeholder='Enter your username'
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            type="password"
            name="password"
            className='form-input'
            placeholder='Enter your password'
          />
        </div>
        <button className='form-input-btn'>Log in</button>
        {/* Link to the Bodynav page */}
        <Link to="/" className='form-input-forgot'>Forgot my password</Link>
      </form>
    </div>
  );
}

export default Register;

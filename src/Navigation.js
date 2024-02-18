import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Destination">Destination</Link></li>
        <li><a className="logo">Torisum</a></li>
        <li className='right'><Link to="/login">Login</Link></li>
        <li className='right'><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

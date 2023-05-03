import React from 'react';
import './style/Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div className='header'>
      <div className="logo"><Link to='/'>
      <h1>Pokedex 2.0</h1>
      </Link>
      </div>
      <div className='navigation'></div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/pokedex'>Pokedex</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
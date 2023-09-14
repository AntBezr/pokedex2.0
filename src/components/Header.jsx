import './style/Header.css'

import { Link, NavLink } from 'react-router-dom';

import React from 'react';

const Header = () => {
  return (
    <div className='header'>
    <div className="logo"><Link to='/'>
      <h1>Pokedex 2.0</h1>
    </Link>
    </div>

    <ul className='navigation'>
      <li className="nav-link active-link"><NavLink to='/' >Home</NavLink></li>
      <li className="nav-link active-link"><NavLink to='/pokedex'>Pokedex</NavLink></li>
    </ul>
  </div>
  );
};

export default Header;
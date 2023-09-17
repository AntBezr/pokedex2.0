import './style/Header.css'

import { Link, NavLink } from 'react-router-dom';

import React from 'react';
import logo from '../images/pokemon-icon.webp'

const Header = () => {
  return (
    <div className='header'>
      <div className="wrapper">


        <div className="logo"><Link to='/'>
          <img src={logo} alt="pokemon logo" id='logo' />
        </Link>
        </div>

        <ul className='navigation'>
          <li className="nav-link active-link"><NavLink to='/' >Home</NavLink></li>
          <li className="nav-link active-link"><NavLink to='/pokedex'>Pokedex</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
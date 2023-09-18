import './style/Header.css'

import { Link, NavLink } from 'react-router-dom';

import React from 'react';
import logo from '../images/pokemon-icon.webp'
import { useState } from 'react';

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='header'>
      <div className="wrapper">


        <div className="logo"><Link to='/'>
          <img src={logo} alt="pokemon logo" id='logo' />
        </Link>
        </div>
        <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "navigation expanded" : "navigation"}>
          <ul >
            <li className="nav-link active-link"><NavLink to='/' onClick={() => { if (isNavExpanded) setIsNavExpanded(!isNavExpanded) }}>Home</NavLink></li>
            <li className="nav-link active-link"><NavLink to='/pokedex' onClick={() => { if (isNavExpanded) setIsNavExpanded(!isNavExpanded) }}>Pokedex</NavLink></li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Header;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import './style/Layout.css'

function Layout(props) {
  return (
    <>
      <div className='header'>
        <div className="logo"><Link to='/'>
          <h1>Pokedex 2.0</h1>
        </Link>
        </div>

        <ul className='navigation'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/pokedex'>Pokedex</NavLink></li>
        </ul>
      </div>
      <div className='content'>
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
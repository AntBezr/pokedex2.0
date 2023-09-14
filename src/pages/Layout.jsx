import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import './style/Layout.css'

function Layout(props) {
  return (
    <>
      <Header/>
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
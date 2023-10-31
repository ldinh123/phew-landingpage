import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='phew-navbar'>
      <div className='phew-navbar-links'>
        <div className='phew-navbar-button'>
          <button>mua hoy!</button>
        </div>
        <div className='phew-navbar-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='phew-navbar-links-container'>
          <span className='brand'><a className='hover-underline-animation' href="#brand">về phew</a></span>
          <span className='feature'><a className='hover-underline-animation' href="#feature">sản phẩm</a></span>
          <span className='blog'><a className='hover-underline-animation' href="#blog">liên hệ</a></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react';
import "./Header.scss";
import logo from "../../assets/images/organic-logo.png";
import Wishlist from '../CardModal/CardModal';
import Store from '../../store/store';

function HeaderMiddle() {
  const wishlistObj = Store(state => state.wishlistObj)
  return (
    <div className='header__middle'>
      <div className="container d-flex align-items-center">
        <div className='header__middle-logo-box'>
          <a href="/" className='header__middle-logo-link'>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className='header__middle-search'>
          <form className='header__middle-form'>
            <input 
              type="text" 
              name='search' className='header__middle-input' 
              required
              placeholder="I'm shopping for ..."
            />
            <button className='header__middle-btn' type='submit'>
              search
              <i className='bx bx-search'></i>
            </button>
          </form>
        </div>
        <ul className='header__middle-list d-flex align-items-center'>
          <li className="header__middle-item">
            <button className='header__middle-item-btn'>
              <i className='bx bx-shopping-bag'></i>
            </button>
          </li>
          <li className="header__middle-item">
            <button className='header__middle-item-btn'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight3" aria-controls="offcanvasRight">
              <i className='bx bx-heart'>
              {wishlistObj.length === 0 ? "" : <span className='headerMain__span'>{wishlistObj.length}</span>}
              </i>
            </button>
          </li>
          <li className="header__middle-item">
            <button className='header__middle-item-btn'>
              <i className='bx bx-refresh'></i>
            </button>
          </li>
        </ul>
      </div>
      <Wishlist/>
    </div>
  )
}

export default HeaderMiddle

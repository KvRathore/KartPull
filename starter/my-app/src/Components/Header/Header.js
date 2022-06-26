import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import CartContext from '../../store/cart-context';

// svgs
import logo_image from './../../assets/svgs/logo.svg';
import cart_image from './../../assets/svgs/cart.svg';

const Header = () => {
  const ctx = useContext(CartContext);
  console.log(ctx);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo_image} alt="brand-logo" />
        <Link to="/">
          <span className="brand-name">KartPull</span>
        </Link>
      </div>
      <div className="cart-logo-container">
        <Link to="/cart">
          <img src={cart_image} alt="cart-logo" />
          <span className="cart-counter">{ctx.cartNumber}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/anorak.svg";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='nav-bar-options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

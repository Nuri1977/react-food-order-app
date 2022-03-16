import React from 'react';
import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton() {
  return (
    <button type="button" className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
}

export default HeaderCartButton;

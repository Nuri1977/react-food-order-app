import React from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton({ showCardHandler }) {
  return (
    <button type="button" className={classes.button} onClick={showCardHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
}

HeaderCartButton.propTypes = {
  showCardHandler: PropTypes.func.isRequired,
};

export default HeaderCartButton;

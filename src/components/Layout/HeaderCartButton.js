import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../context/cart-context';

function HeaderCartButton({ showCardHandler }) {
  const cartCtx = useContext(CartContext);

  const numberCartItems = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0);

  return (
    <button type="button" className={classes.button} onClick={showCardHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberCartItems}</span>
    </button>
  );
}

HeaderCartButton.propTypes = {
  showCardHandler: PropTypes.func.isRequired,
};

export default HeaderCartButton;

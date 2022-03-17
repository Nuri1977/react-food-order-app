import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../context/cart-context';

function HeaderCartButton({ showCardHandler }) {
  const [btnAnimated, setBtnAnimated] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimated(true);

    const timer = setTimeout(() => {
      setBtnAnimated(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);

  const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ''}`;

  return (
    <button type="button" className={btnClasses} onClick={showCardHandler}>
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

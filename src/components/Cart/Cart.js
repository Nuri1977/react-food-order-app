import React from 'react';
import PropTypes from 'prop-types';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

function Cart({ hideCardHandler }) {
  const cartItems = [
    {
      id: 'c1',
      name: 'Sushi',
      amount: 2,
      price: 12.78,
    },
    {
      id: 'c2',
      name: 'Burek',
      amount: 1,
      price: 6.99,
    },
  ].map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <Modal hideCardHandler={hideCardHandler}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.88</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={hideCardHandler}>Close</button>
        <button type="button" className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  hideCardHandler: PropTypes.func.isRequired,
};

export default Cart;

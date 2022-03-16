import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

function Cart() {
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
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.88</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']}>Close</button>
        <button type="button" className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;

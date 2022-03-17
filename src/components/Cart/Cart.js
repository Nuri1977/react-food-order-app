import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';

function Cart({ hideCardHandler }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      item={item}
      price={item.price}
      amount={item.amount}
      name={item.name}
      addCartItemHandler={addCartItemHandler}
      removeCartItemHandler={removeCartItemHandler}
    />
  ));

  return (
    <Modal hideCardHandler={hideCardHandler}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={hideCardHandler}>Close</button>
        {cartCtx.items.length > 0 && <button type="button" className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  hideCardHandler: PropTypes.func.isRequired,
};

export default Cart;

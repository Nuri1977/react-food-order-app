import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';

function CartItem({
  price, name, amount, addCartItemHandler, removeCartItemHandler, item, id,
}) {
  const priceConverted = `$${price.toFixed(2)}`;
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceConverted}</span>
          <span className={classes.amount}>
            x
            {' '}
            {amount}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={() => removeCartItemHandler(id)}>−</button>
        <button type="button" onClick={() => addCartItemHandler(item)}>+</button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  addCartItemHandler: PropTypes.func.isRequired,
  removeCartItemHandler: PropTypes.func.isRequired,
  item: PropTypes.objectOf.isRequired,
};

export default CartItem;

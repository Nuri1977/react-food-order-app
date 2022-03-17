import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../context/cart-context';

function MealItem({
  id, name, description, price,
}) {
  const cartCtx = useContext(CartContext);

  const priceConverted = `$${price.toFixed(2)}`;
  const addAmountToCart = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceConverted}</div>
      </div>
      <div>
        <MealItemForm addAmountToCart={addAmountToCart} />
      </div>
    </li>
  );
}

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MealItem;

import React from 'react';
import PropTypes from 'prop-types';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

function MealItem({ name, description, price }) {
  const priceConverted = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceConverted}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}

MealItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MealItem;

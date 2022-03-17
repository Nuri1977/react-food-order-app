import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm({ addAmountToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
    } else {
      addAmountToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          default: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please add a valid amount (1-5).</p>}
    </form>
  );
}

MealItemForm.propTypes = {
  addAmountToCart: PropTypes.func.isRequired,
};

export default MealItemForm;

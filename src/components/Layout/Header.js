import React from 'react';
import meal from '../../assets/meals.jpg';
import classes from './Header.module.css';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button type="button">Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={meal} alt="meals" />
      </div>
    </>
  );
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import meal from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header({ showCardHandler }) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCardHandler={showCardHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={meal} alt="meals" />
      </div>
    </>
  );
}

Header.propTypes = {
  showCardHandler: PropTypes.func.isRequired,
};

export default Header;

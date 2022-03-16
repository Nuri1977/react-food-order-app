/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Backdrop({ hideCardHandler }) {
  return (
    <div className={classes.backdrop} onClick={hideCardHandler} />
  );
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{ children }</div>
    </div>
  );
}

function Modal({ children, hideCardHandler }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCardHandler={hideCardHandler} />,
        document.getElementById('overlays'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays'),
      )}
    </Fragment>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideCardHandler: PropTypes.func.isRequired,
};

Backdrop.propTypes = {
  hideCardHandler: PropTypes.func.isRequired,
};

export default Modal;

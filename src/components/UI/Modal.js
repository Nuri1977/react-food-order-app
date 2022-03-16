/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Backdrop() {
  return (
    <div className={classes.backdrop} />
  );
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{ children }</div>
    </div>
  );
}

function Modal({ children }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;

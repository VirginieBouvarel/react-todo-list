import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from '../../store/theme-context';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

const ModalOverlay = (props) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div className={`${classes.modal} ${themeCtx.darkMode ? 'modal--dark' : ''}`}>{props.children}</div>
  );
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
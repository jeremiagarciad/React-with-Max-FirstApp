import React from "react";
import Button from "./Button";

import ReactDOM from "react-dom";

import "./ErrorModal.css";

const Backdrop = ({ onConfirm }) => {
  return <div className="backdrop" onClick={onConfirm} />;
};

const ModalOverLay = ({ onConfirm, message, title }) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </div>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay message={message} title={title} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

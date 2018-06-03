import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption}
    style={customStyles}
    contentLabel = "Selected Option"
    ariaHideApp={false}
  >
      <h3>Selected Option</h3>
      {props.selectedOption && <p> {props.selectedOption} </p>}
      <button onClick = {props.clearModal} > Cancel </button>
    </Modal>
);

const customStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.90)'
  },
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-60%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 255, 0.3)'
  }
};

export default OptionModal;

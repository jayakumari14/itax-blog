import React from 'react';
import './styles/modal.css';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import Button, { BTN_SIZES } from './Button';

const Modal = ({ title, isOpen, onClose, className, children }) => {
  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div
        className={`modal-overlay ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />
      <div className={`modal-content w-[90%] lg:w-[950px] ${className}`}>
        <div className="modal-header my-3">
          <h3 className="modal-title">{title}</h3>
          <Button
            className={`${BTN_SIZES['sm']} bg-white text-slate-800 outline-none`}
            onClick={onClose}
          >
            <IoMdClose size={25} />
          </Button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;

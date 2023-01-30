import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      closeModal();
    }, 2000);

    return () => clearTimeout(timerId);
  });

  return <div className='modal'>{modalContent}</div>;
};

export default Modal;

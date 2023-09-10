import React, { useState, useEffect } from 'react';
import { ModalWind, Overlay } from './Modal.styled';

export const Modal = ({ image, closeModal }) => {
  const [isOpen, setIsOpen] = useState('false');

  const onCloseModal = () => {
    setIsOpen(false);
    closeModal();
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

    return (
    <div>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <ModalWind>
            <img src={image} alt="" />
          </ModalWind>
        </Overlay>
      )}
    </div>
  );
};

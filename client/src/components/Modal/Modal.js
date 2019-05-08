import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalWrapper, ModalCard, CloseButton, BackgroundNorm } from '../../styles/component/modal';

const Portal = ({ children }) => {
    const modalRoot = document.getElementById('modal');
    const el = document.createElement('div');

    useEffect(() => {
      modalRoot.appendChild(el);
    });

    useEffect(() => () => modalRoot.removeChild(el));

    return createPortal(children, el);
  };

  const Modal = ({ children, toggle, open }) => (
    <Portal>
      {open && (
        <ModalWrapper>
          <ModalCard>
            <CloseButton onClick={toggle}>
              <img src="https:icon.now.sh/x/ff0000" alt="close" />
            </CloseButton>
            {children}
          </ModalCard>
          <BackgroundNorm onClick={toggle} />
        </ModalWrapper>
      )}
    </Portal>
  );

  Modal.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggle: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  export default Modal;
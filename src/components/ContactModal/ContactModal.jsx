import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import s from "./ContactModal.module.scss";

const modalRoot = document.querySelector("#modal-root");
const ContactModal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={s.Modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};

ContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;

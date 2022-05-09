import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import AvatarUploader from "../AvatarUploader/AvatarUploader";
import defaultAvatar from "../../images/icons/user.png";

import PropTypes from "prop-types";

import s from "./UserModal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const UserModal = ({ onClose }) => {
  const avatar = useSelector(authSelectors.getAvatar);
  const name = useSelector(authSelectors.getUsername);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
      window.removeEventListener("keydown", handleKeyDown);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>
        <div className={s.avatarBlock}>
          {avatar ? (
            <img className={s.userAvatar} src={avatar} alt={name} />
          ) : (
            <img className={s.userAvatar} src={defaultAvatar} alt={name} />
          )}
        </div>
        <p className={s.userName}>{name}</p>
        <AvatarUploader onClosePopup={onClose} />
      </div>
    </div>,
    modalRoot
  );
};

UserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UserModal;

import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatarOperations from "../../redux/avatar/avatar-operations";
import authSelectors from "../../redux/auth/auth-selectors";

import styles from "./AvatarUploader.module.scss";

const AvatarUploader = ({ onClosePopup }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const hiddenInput = useRef(null);
  const isLoading = useSelector((state) => authSelectors.isLoading(state));
  const fileSizeLimit = 2 * 1024 * 1024;

  const onHiddenInputClick = () => {
    setError(null);
    hiddenInput.current.click();
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      setError("Выберите файл для загрузки");
      return;
    }

    const type = file.type.split("/").pop().toLowerCase().trim();

    if (!["png", "jpg", "jpeg"].includes(type)) {
      setError("Неверный формат файла");
      setFile(null);
      return;
    }

    if (file?.size > fileSizeLimit) {
      setError("Размер файла превышает лимит 2 Мб");
      setFile(null);
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file, file.name);
    dispatch(avatarOperations.setAvatar(formData));
    setFile(null);
    onClosePopup();
  };

  return (
    <div className={styles.uploadWrapper}>
      <a className={styles.btn} href="/#" onClick={onHiddenInputClick}>
        <span className={styles.btnText}>Choose file</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
      <input
        className={styles.uploadInput}
        type="file"
        onChange={onFileChange}
        ref={hiddenInput}
      />
      {isLoading ? (
        <p className={styles.placeholder}>Загружаем...</p>
      ) : (
        <>
          {error && <p className={styles.placeholder}>{error}</p>}
          {file && !error ? (
            <div className={styles.infoWrapper}>
              <p className={styles.info}>Название файла: {file.name}</p>
              <p className={styles.info}>
                Размер: {(file.size / 1024 / 1024).toFixed(2)} Mb
              </p>
              <p className={styles.info}>Формат: {file.type}</p>
            </div>
          ) : (
            !error && <p className={styles.placeholder}>Change avatar</p>
          )}
        </>
      )}
      <a className={styles.btn} href="/#" onClick={onFileUpload}>
        <span className={styles.btnText}>Upload</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default AvatarUploader;

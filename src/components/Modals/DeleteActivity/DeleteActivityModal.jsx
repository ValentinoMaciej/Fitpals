import React from "react";
import styles from "../../Modals/Modals.module.css";
import Logo from "../../Images/FitPalLogo.png";
import CancelButton from "../../../Assets/cancel button.svg";

export const DeleteActivityModal = ({
  showDeleteActivityModal,
  setShowDeleteActivityModal,
}) => {
  const content = showDeleteActivityModal && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShowDeleteActivityModal(false)}
      >
        <img
          src={CancelButton}
          alt="cancel button"
          className={styles.cancelButton}
        />
      </button>
      <h1>Poprawnie usunięto aktywność</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};

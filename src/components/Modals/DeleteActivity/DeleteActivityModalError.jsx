import React from "react";
import styles from "../../Modals/Modals.module.css";
import Logo from "../../Images/FitPalLogo.png";
import CancelButton from "../../../Assets/cancel button.svg";

export const DeleteActivityModalError = ({
  showDeleteActivityModalError,
  setShowDeleteActivityModalError,
}) => {
  const content = showDeleteActivityModalError && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShowDeleteActivityModalError(false)}
      >
        <img
          src={CancelButton}
          alt="cancel button"
          className={styles.cancelButton}
        />
      </button>
      <h1>Aktywność nie została usunięta. Spróbuj jeszcze raz</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};

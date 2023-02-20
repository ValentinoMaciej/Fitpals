import React from "react";
import styles from "../../Modals/Modals.module.css";
import Logo from "../../Images/FitPalLogo.png";
import CancelButton from "../../../Assets/cancel button.svg";
import { NavLink } from "react-router-dom";

export const RegisterModal = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <div className={styles.modal}>
          <button
            className={styles.modalClose}
            type="button"
            onClick={() => setShow(false)}
          >
            <NavLink to="/login">
              <img
                src={CancelButton}
                alt="cancel button"
                className={styles.cancelButton}
              />
            </NavLink>
          </button>
          <h1>Gratulacje, zostałeś poprawnie zarejestrowany !</h1>
          <img src={Logo} alt="logo of company" className={styles.logo} />
        </div>
      ) : null}
    </>
  );
};

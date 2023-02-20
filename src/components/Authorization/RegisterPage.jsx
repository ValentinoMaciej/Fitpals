import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import styles from "./RegisterPage.module.css";
import { db } from "../../api/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { RegisterModal } from "../Modals/RegisterModal/RegisterModal";
import { LoginRegisterErrorModal } from "../Modals/LoginRegisterErrorModal/LoginRegisterErrorModal";
import { EmailInUseModal } from "../Modals/EmailInUseModal/EmailInUseModal";

export const RegisterPage = () => {
  const usersCollection = collection(db, "Users");
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      setShow(true);

      await addDoc(usersCollection, {
        Email: user.email,
        UUID: user.uid,
      });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        setEmailInUse(true);
      } else {
        setShowError(true);
      }
    }
    e.target.reset();
    signOut(auth);
  };
  return (
    <div className={styles.authBox}>
      <h2 className={styles.heading}>Zarejestruj się</h2>
      <form onSubmit={handleRegister} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Podaj e-mail:
        </label>
        <input type="email" name="email" id="email" className={styles.input} />

        <label htmlFor="password" className={styles.label}>
          Podaj hasło:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.input}
        />

        <button onClick={() => {}} type="submit" className={styles.button}>
          Zarejestruj się
        </button>
        <RegisterModal show={show} setShow={setShow} />
        <LoginRegisterErrorModal
          showError={showError}
          setShowError={setShowError}
        />
        <EmailInUseModal show={emailInUse} setShow={setEmailInUse} />
      </form>
    </div>
  );
};

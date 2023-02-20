import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { getFormData } from "./getFormData";
import { Form } from "../Authorization/Form";
import styles from "./ForgotPassword.module.css";
import { useState } from "react";
import { ForgotPasswordModal } from "../Modals/ForgotPasswordModal/ForgotPasswordModal";

export const ForgotPassword = () => {
  const [show, setShow] = useState(false);

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const { email } = getFormData(e);
    setShow(true);
    sendPasswordResetEmail(auth, email).catch((e) => {
      console.dir(e);
    });
  };

  return (
    <div className={styles.forgotPasswordSection}>
      <Form
        submitText="Poproś o przypomnienie hasła"
        onSubmit={handlePasswordReset}
        isPasswordHidden
      />
      <ForgotPasswordModal show={show} setShow={setShow} />
    </div>
  );
};

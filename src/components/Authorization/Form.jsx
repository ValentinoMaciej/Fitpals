import styles from "./Form.module.css";
export const Form = ({ submitText, isPasswordHidden = false, onSubmit }) => (
  <div className={styles.wrapper}>
    <form onSubmit={onSubmit} className={styles.forgotPasswordForm}>
      <div className={styles.emailContainer}>
        <h3>Uzupełnij formularz i kliknij przycisk aby przypomnieć hasło:</h3>
        <label htmlFor="email" className={styles.emailLabel}>
          Podaj e-mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.emailInput}
          required
        />
      </div>
      {!isPasswordHidden && (
        <div>
          <label htmlFor="password">Podaj hasło</label>
          <input type="password" name="password" id="password" />
        </div>
      )}
      <button className={styles.sendButton}>{submitText}</button>
    </form>
  </div>
);

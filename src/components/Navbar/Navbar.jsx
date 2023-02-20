import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import FitPalLogo from "../../Assets/FitPalLogo.png";

export const Navbar = ({ isAuth }) => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navBox}>
        <li>
          <NavLink to="/" className={styles.navLinkLogo}>
            <img src={FitPalLogo} className={styles.navbarLogo} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/find-fitpal" className={styles.navLink}>
            Znajdź FitPala
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink to="/my-fitpal" className={styles.navLink}>
              Moje FitPale
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/premium" className={styles.navLink}>
            Premium
          </NavLink>
        </li>
        <li className={styles.navItemPosition}>
          <NavLink to="/contact" className={styles.navLink}>
            Kontakt
          </NavLink>
        </li>

        {isAuth ? (
          <li>
            <NavLink
              to="/"
              className={styles.navLink}
              onClick={() => signOut(auth)}
            >
              Wyloguj się
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login" className={styles.navLink}>
                Zaloguj się
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={styles.navLink}>
                Zarejestruj się
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

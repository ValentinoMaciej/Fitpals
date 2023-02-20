import React from "react";
import styles from "./Footer.module.css";
import FooterLogo from "../../Assets/FitPalLogo.png";
import GitHubLogo from "../Footer/FooterImages/GitHubLogo.svg";

export function Footer() {
  const devName = [
    { name: "Olga", profile: "https://github.com/olga-grochowska" },
    { name: "Kasia", profile: "https://github.com/katarzyna-skibowska" },
    { name: "Adam", profile: "https://github.com/AdamPawlowski84" },
    { name: "Maciej", profile: "https://github.com/ValentinoMaciej" },
  ];
  const developer = ({ name, profile }) => (
    <React.Fragment key={name}>
      <a href={profile} className={styles.names}>
        <img
          src={GitHubLogo}
          alt="logo of github"
          className={styles.gitHubLogo}
        />
        {name}
      </a>
    </React.Fragment>
  );
  const DevList = () => (
    <div className={styles.devContainer}>
      <h2>PROGRAMIŚCI</h2>
      <div className={styles.devList}>{devName.map(developer)}</div>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <img
        src={FooterLogo}
        alt="logo of company"
        className={styles.footerLogo}
      />
      <article className={styles.footerOption}>
        <p className={styles.footerTitle}>FITPAL</p>
        <p>ul. Bootcampowa, pokój 69</p>
        <p>404 City Not-Found</p>
        <p>e-mail: biuro.fitpals@gmail.com</p>
        <p>tel. +48 XXX XXX XXX</p>
      </article>
      <DevList />
    </footer>
  );
}

import styles from "./Premium.module.css";

export const Premium = () => {
  return (
    <div className={styles.premiumContainer}>
      <article className={styles.articleContainer}>
        <h2>Juz niebawem skorzystaj z opcji Premium !</h2>
        <p>
          Z końcem I kwartału 2023 dostępna dla Was będzie możliwośc subskrypcji
          Premium, która zagwarantuje:
        </p>
        <ul className={styles.premiumList}>
          <li>Możliwość dodawania powyżej 5 zdarzeń w miesiącu,</li>
          <li>Weryfikacja użytkowników,</li>
          <li>Dodawanie ocen użytkownikom,</li>
          <li>Korzystanie z naszej bazy danych z fit-przepisami,</li>
          <li>5% zniżki na karnety w wybranych klubach fitness !</li>
        </ul>
      </article>
    </div>
  );
};

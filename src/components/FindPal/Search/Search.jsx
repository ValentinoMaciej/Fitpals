import styles from "./Search.module.css";

import { useRef } from "react";

export const Search = ({ setSearchData }) => {
  const input = useRef(null);

  const getFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const { date, time, city, activity } = form;

    const fitpal = {
      date: date.value,
      time: time.value,
      city: city.value,
      activity: activity.value,
    };
    setSearchData(fitpal);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={getFormData} className={styles.formStyling}>
        <div className={styles.forms}>
          <label htmlFor="date" className={styles.titles}>
            Data aktywności:
          </label>
          <div>
            <input
              ref={input}
              type="date"
              name="date"
              id="date"
              className={`${styles.formsInput} ${styles.dateInput}`}
            />
            <input
              ref={input}
              type="time"
              name="time"
              id="time"
              className={`${styles.formsInput} ${styles.timeInput}`}
            />
          </div>
        </div>
        <div className={styles.forms}>
          <label htmlFor="city" className={styles.titles}>
            Miejscowość:
          </label>
          <input
            ref={input}
            type="text"
            name="city"
            id="city"
            className={`${styles.formsInput} ${styles.cityInput}`}
          />
        </div>
        <div className={styles.selectionInput}>
          <label htmlFor="activity" className={styles.titles}>
            Aktywność:
          </label>
          <select
            ref={input}
            name="activity"
            id="activity"
            className={`${styles.formsInput} ${styles.activityInput}`}
          >
            <option value="">Wszystkie</option>
            <option value="Boks">Boks</option>
            <option value="Fitness">Fitness</option>
            <option value="Piłka Nożna">Piłka Nożna</option>
            <option value="Siłownia">Siłownia</option>
            <option value="Jogging">Jogging</option>
            <option value="Koszykówka">Koszykówka</option>
            <option value="Squash">Squash</option>
            <option value="Siatkówka">Siatkówka</option>
            <option value="Tennis">Tennis</option>
            <option value="Tennis Stołowy">Tennis Stołowy</option>
            <option value="Łyżworolki">Łyżworolki</option>
            <option value="Wspinaczka">Wspinaczka</option>
            <option value="Trekking">Trekking</option>
            <option value="Pływanie">Pływanie</option>
          </select>
        </div>
        <input type="submit" value="Wyszukaj" className={styles.submit} />
      </form>
    </div>
  );
};

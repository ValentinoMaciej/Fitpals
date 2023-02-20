import React, { useState } from "react";
import { CancelEditModal } from "../../Modals/CancelEditModal/CancelEditModal";
import { EditModal } from "../../Modals/EditModal/EditModal";
import styles from "./Activity.module.css";

const Activity = ({
  date,
  time,
  city,
  place,
  activity,
  activityId,
  deleteActivity,
  updateFitPal,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [fitpalData, setFitpalData] = useState({
    date: date,
    time: time,
    city: city,
    place: place,
    id: activityId,
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCancelEditModal, setShowCancelEditModal] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFitpalData({ ...fitpalData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateFitPal(activityId, fitpalData);
    setEditMode(false);
    setShowEditModal(true);
  };

  return (
    <div className={styles.box}>
      {editMode ? (
        <div className={styles.activeEditBox}>
          <label htmlFor="city" className={styles.label}>
            Miasto:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            value={fitpalData.city}
            className={styles.input}
          />

          <label htmlFor="date" className={styles.label}>
            Data:
          </label>
          <input
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            value={fitpalData.date}
            className={styles.input}
          />

          <label htmlFor="time" className={styles.label}>
            Godzina:
          </label>
          <input
            onChange={handleChange}
            type="time"
            name="time"
            id="time"
            value={fitpalData.time}
            className={styles.input}
          />

          <label htmlFor="place" className={styles.label}>
            Miejsce:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="place"
            id="place"
            value={fitpalData.place}
            className={styles.input}
          />

          <p className={styles.activity}>Aktywność: {activity}</p>

          <button
            className={styles.button}
            onClick={() => {
              setEditMode(false);
              setShowCancelEditModal(true);
            }}
          >
            Anuluj
          </button>
          <button className={styles.button} onClick={handleSave}>
            Zapisz zmiany
          </button>
        </div>
      ) : (
        <div className={styles.activityBox}>
          <p>
            <strong>Aktywność:</strong> {activity}
          </p>
          <p>
            <strong>Miasto:</strong> {city}
          </p>
          <p>
            <strong>Data:</strong> {date}
          </p>
          <p>
            <strong>Godzina:</strong> {time}
          </p>
          <p>
            <strong>Miejsce:</strong> {place}
          </p>
          <button
            className={styles.button1}
            onClick={() => deleteActivity(activityId)}
          >
            Usuń aktywność
          </button>
          <button className={styles.button2} onClick={() => setEditMode(true)}>
            Edytuj
          </button>
        </div>
      )}
      <EditModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
      <CancelEditModal
        showCancelEditModal={showCancelEditModal}
        setShowCancelEditModal={setShowCancelEditModal}
      />
    </div>
  );
};

export default Activity;

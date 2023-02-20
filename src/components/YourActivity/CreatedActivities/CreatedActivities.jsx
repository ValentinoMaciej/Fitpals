import { db, auth } from "../../../api/firebase";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import Activity from "./Activity";
import styles from "./CreatedActivities.module.css";
import { DeleteActivityModal } from "../../Modals/DeleteActivity/DeleteActivityModal";
import { DeleteActivityModalError } from "../../Modals/DeleteActivity/DeleteActivityModalError";
import { NavLink } from "react-router-dom";

export const CreatedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const [showDeleteActivityModal, setShowDeleteActivityModal] = useState(false);
  const [showDeleteActivityModalError, setShowDeleteActivityModalError] =
    useState(false);
  const fitpalsCollection = collection(db, "FitPals");
  const currentUserId = auth?.currentUser?.uid;

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const handleUpdate = async (id, updatedFitpal) => {
    try {
      const docRef = doc(db, "/FitPals", id);
      const document = await getDoc(docRef);

      const updatedDocument = { ...document.data(), ...updatedFitpal };

      if (currentUserId) {
        await updateDoc(docRef, updatedDocument);
      }
    } catch (e) {
      console.error("An error occured ", e);
    }
  };

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "FitPals", id);
      await deleteDoc(docRef);
      setShowDeleteActivityModal(true);
    } catch (e) {
      setShowDeleteActivityModalError(true);
    }
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitpals(querySnapshot);
      const filteredData = data.filter(
        (element) => element.creator === currentUserId
      );
      setFitpals(filteredData);
    });
  }, [currentUserId]);

  return (
    <>
      <h2 className={styles.heading}>Aktywności utworzone przez Ciebie</h2>
      <ul className={styles.listBoxes}>
        {fitpals.length > 0 ? (
          fitpals.map(({ id, date, time, city, place, activity }) => (
            <li key={id} className={styles.listItem}>
              <Activity
                date={date}
                time={time}
                city={city}
                place={place}
                activity={activity}
                activityId={id}
                deleteActivity={handleDelete}
                updateFitPal={handleUpdate}
              />
            </li>
          ))
        ) : (
          <div className={styles.description}>
            <p>Na razie nie masz tutaj żadnych wydarzeń. &#x1F614;</p>
            <p className={styles.descriptionBold}>Co możesz zrobić?</p>
            <p>
              Dodaj aktywność w formularzu powyżej lub dołącz do dowolnego
              wydarzenia w zakładce "
              <NavLink to="/find-fitpal" className={styles.link}>
                Znajdź FitPala
              </NavLink>
              ".
              <p>
                Znajdziesz je później przełączając się powyżej na sekcje
                "Dołączono".
              </p>
            </p>
          </div>
        )}
      </ul>
      <DeleteActivityModal
        showDeleteActivityModal={showDeleteActivityModal}
        setShowDeleteActivityModal={setShowDeleteActivityModal}
      />
      <DeleteActivityModalError
        showDeleteActivityModalError={showDeleteActivityModalError}
        setShowDeleteActivityModalError={setShowDeleteActivityModalError}
      />
    </>
  );
};

import { db, auth } from "../../../api/firebase";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import styles from "./JoinedActivities.module.css";
import { UpdateModal } from "../../Modals/UpdateModal/UpdateModal";
import { NavLink } from "react-router-dom";

export const JoinedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");
  const [show, setShow] = useState(false);
  const currentUserId = auth?.currentUser?.uid;

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const handleUpdate = async (id) => {
    try {
      const docRef = doc(db, "/FitPals", id);
      const document = await getDoc(docRef);
      let filteredJoinedUsers;
      if (currentUserId) {
        filteredJoinedUsers = document
          .data()
          .joinedUsers.filter((joinedUserId) => joinedUserId !== currentUserId);

        await updateDoc(docRef, { joinedUsers: filteredJoinedUsers });
      }
    } catch (e) {
      console.error("An error occured ", e);
    }
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitpals(querySnapshot);
      const filteredData = data.filter((element) =>
        element.joinedUsers ? element.joinedUsers.includes(currentUserId) : null
      );
      setFitpals(filteredData);
    });
  }, [fitpalsCollection]);

  return (
    <>
      <h2 className={styles.heading}>Aktywności w których bierzesz udział</h2>
      <ul className={styles.listBoxes}>
        {fitpals.length > 0 ? (
          fitpals.map(({ id, date, time, city, place, activity }) => (
            <li key={id} className={styles.listItem}>
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
                className={styles.button}
                onClick={() => {
                  handleUpdate(id);
                  setShow(true);
                }}
              >
                Usuń aktywność
              </button>
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
            </p>
          </div>
        )}
        <UpdateModal show={show} setShow={setShow} />
      </ul>
    </>
  );
};

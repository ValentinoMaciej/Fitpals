import { FormActivity } from "./FormActivities/FormActivities";
import { CreatedActivities } from "./CreatedActivities/CreatedActivities";
import { JoinedActivities } from "./JoinedActivities/JoinedActivities";
import { useState } from "react";
import styles from "./YourActivity.module.css";

export const YourActivity = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Aktywności utworzone",
      content: <CreatedActivities />,
    },

    {
      id: 2,
      tabTitle: "Dołączono",
      content: <JoinedActivities />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className={styles.mainSection}>
      <h2 className={styles.formHeading}>
        Dodaj nową aktywność - nowego FitPala
      </h2>
      <FormActivity />
      <div className={styles.container}>
        <div className={styles.tabs}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <p className={styles.title}></p>
                  <div>{tab.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

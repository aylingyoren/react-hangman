import React from "react";
import { keyList } from "../keyList";
import styles from "./Keyboard.module.css";

export const Keyboard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keyList.map((key) => (
        <button className={`${styles.btn}`} key={key}>
          {key}
        </button>
      ))}
    </div>
  );
};

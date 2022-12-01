import React from "react";
import { keyList } from "../helpers/keyList";
import classes from "./Keyboard.module.css";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem",
    }}
  >
    {keyList.map((key) => {
      const isActive = activeLetters.includes(key);
      const isInactive = inactiveLetters.includes(key);
      return (
        <button
          onClick={() => addGuessedLetter(key)}
          className={`${classes.btn} ${isActive && classes.active} ${
            isInactive && classes.inactive
          }`}
          disabled={isInactive || isActive || disabled}
          key={key}
        >
          {key}
        </button>
      );
    })}
  </div>
);

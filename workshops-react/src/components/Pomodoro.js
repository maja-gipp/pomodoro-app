import "./Pomodoro.css";
import { useEffect, useState } from "react";

// TODO center list items and display them vertically
// TODO make list items look like buttons
// TODO highlight the active button

// "pomodor", "short-break", "long-break"

const modes = [
  {
    id: "pomodoro",
    label: "Pomodoro",
    time: 25,
  },
  {
    id: "short-break",
    label: "Short break",
    time: 5,
  },
  {
    id: "long-break",
    label: "Long break",
    time: 15,
  },
];

export const Pomodoro = () => {
  const [activeMode, setActiveMode] = useState(modes[0].id);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const mode = modes.find((mode) => mode.id === activeMode);

  // Running the clock
  useEffect(() => {
    if (isRunning === false) {
      return;
    }
    const intervalId = setInterval(() => {
      setTime((x) => x - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  // Reseting clock value on mode change
  useEffect(() => {
    setTime(mode.time);
    setIsRunning(false);
  }, [mode])

  return (
    <div>
      <ul className="navigation">
        {modes.map((mode) => {
          return (
            <li>
              <button
                onClick={() => {
                  setActiveMode(mode.id);
                }}
                className={activeMode === mode.id ? "active" : ""}
              >
                {mode.label}
              </button>
            </li>
          );
        })}
      </ul>
      <section>
        {time}{" "}
        <button
          onClick={() => {
            setIsRunning(true);
          }}
        >
          Start
        </button>
      </section>
    </div>
  );
};

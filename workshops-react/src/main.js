import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Pomodoro } from "./components/Pomodoro";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Pomodoro />
  </StrictMode>
);

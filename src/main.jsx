import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Add from "./pages/Add";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Add />
  </StrictMode>
);

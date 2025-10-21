import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="main-container">
      <Header></Header>
    </div>
  </StrictMode>,
);

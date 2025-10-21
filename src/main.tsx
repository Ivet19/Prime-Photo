import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout/Layout";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);

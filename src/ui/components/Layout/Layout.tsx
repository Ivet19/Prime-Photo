import React from "react";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        Estamos trabajando en nuestra página web. Próximamente estará
        disponible.
      </main>
    </div>
  );
};

export default Layout;

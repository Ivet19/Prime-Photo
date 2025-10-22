import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1 className="site-title" aria-label="Prime Photo">
        <img
          className="site-logo"
          src="/images/logo.svg"
          alt=""
          data-testid="app-logo"
          width={183}
          height={110}
        />
      </h1>
    </header>
  );
};

export default Header;

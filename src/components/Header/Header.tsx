import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="site-title-container">
        <h1 className="site-title">Prime Photo</h1>
        <img
          className="site-logo"
          src="/images/logo.svg"
          alt=""
          data-testid="logo"
          width={183}
          height={110}
        />
      </div>
    </header>
  );
};

export default Header;

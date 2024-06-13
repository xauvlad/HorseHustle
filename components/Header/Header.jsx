import React from "react";
import Link from "next/link";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left-container">
          <Link className="header-link" href="/">
            HorseHustle
          </Link>
          <div className="header-divider" />
        </div>
        <div className="header-middle-container">
          <Link className="header-link-middle" href="/home">
            Главная
          </Link>
        </div>
        <div className="header-right-container">
        </div>
      </header>
    </div>
  );
};

export default Header;
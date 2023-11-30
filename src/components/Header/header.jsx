import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import LOGO from "./cryptoland.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="links">
          <ul>
            <li onClick={() => navigate("/exchanges")}>Exchanges</li>
          </ul>
        </div>
        <div className="logo">
          <img src={LOGO} className="logo" onClick={() => navigate("/")} />
        </div>
        <div className="links">
          <ul>
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

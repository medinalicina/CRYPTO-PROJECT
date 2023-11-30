import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" onClick={() => navigate("/")}>
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" onClick={() => navigate("/crypto")}>
            Crypto Page
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" onClick={() => navigate("/news")}>
            News
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" onClick={() => navigate("/exchanges")}>
            Exchanges
          </a>
        </li>
      </ul>
      <p>&copy; Medina Ličina | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

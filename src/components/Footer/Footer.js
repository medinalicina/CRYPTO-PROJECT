import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>O nama</h3>
          <p>
            nemam pojma sta treba da napisem ove Allaha mi hahahahahah  
          </p>
        </div>
        <div className="footer-section">
          <h3>Linkovi</h3>
          <ul>
            <li>
              <a href="#">Crypto</a>
            </li>
            <li>
              <a href="#">Exchanges</a>
            </li>
            <li>
              <a href="#">news</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Kontakt informacije</h3>
          <p>Email: info@vasshop.com</p>
          <p>Telefon: 123-456-789</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
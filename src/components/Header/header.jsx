import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
 
  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="logo">
         <h1 onClick={()=> navigate('/')}>logo</h1>
        </div>
        <div className="links">
          <ul>
            <li onClick={()=> navigate('/crypto')}>Crypto</li>
            <li onClick={()=> navigate('/exchanges')}>Exchanges</li>
            <li onClick={()=> navigate('/news')}>News</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

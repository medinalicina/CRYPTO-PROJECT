// Card.js
import React from "react";
import "./Card.css";
import CryptoInfo from "./CryptoInfo";

function Card({ coin }) {
  return (
    <div className="card">
      <img
        src={coin.iconUrl}
        alt={`${coin.name} icon`}
        className="coin-image" />
       <CryptoInfo coin={coin} />
       

    </div>
  );
}

export default Card;

import React from "react";
import "./ExchangeStats.css";

function ExchangeStats({ exchanges }) {
  const price = parseFloat(exchanges.price);

  const getStatus = () => {
    return exchanges.recommended ? "Safe" : "Unsafe";
  };

  return (
    <div className="stats-content11">
      <div>
        <p>{exchanges.rank}.</p>
      </div>
      <div>
        <img src={exchanges.iconUrl} alt={exchanges.name} />
      </div>
      <div>
        <a href={exchanges.coinrankingUrl}>{exchanges.name}</a>
      </div>
      <div>
        <p id="price">{price.toFixed(2)}</p>
      </div>
      <div>
        <p>{getStatus()}</p>
      </div>
    </div>
  );
}

export default ExchangeStats;

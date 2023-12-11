import React from "react";
import "./CryptoInfo.css";

const formatToTwoDecimals = (number) => {
  return parseFloat(number).toFixed(2);
};

function CryptoInfo({ coin }) {
  const numericPrice = formatToTwoDecimals(coin.price);
  const change = parseFloat(coin.change);

  const textColor = change < 0 ? "red" : "green";

  const formattedChange = change < 0 ? coin.change : `+${coin.change}`;

  return (
    <div className="crypto-info">
      <p className="info-text">
        Name: {coin.name} ({coin.symbol})
      </p>
    
      <p className="info-text">
        Last 24h: <span style={{ color: textColor }}>{formattedChange}</span>
      </p>
      <p className="info-text">MarketCap: {coin.marketCap}</p>
      <p className="info-text">Price : {numericPrice}</p>
    </div>
    //komentar
    
  );
}

export default CryptoInfo;

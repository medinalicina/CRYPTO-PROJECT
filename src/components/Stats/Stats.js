import React from "react";
import "./Stats.css";

function Stats({ coinStats }) {
  return (
    <div className="stats-cont">
      <div className="left">
        <div className="stats" id="prvi">
          <h2>
            <span id="white">Total Coins:</span>
          </h2>
          <h2>{coinStats.totalCoins}</h2>
        </div>
        <div className="stats" id="drugi">
          <h2>
            <span id="white">Total Markets:</span>
          </h2>
          <h2>{coinStats.totalMarkets}</h2>
        </div>
        <div className="stats" id="treci">
          <h2>
            <span id="white">Total Exchanges:</span>
          </h2>
          <h2>{coinStats.totalExchanges}</h2>
        </div>
      </div>
      <div className="right">
        <div className="stats" id="cetvrti">
          <h2>
            <span id="white">Total MarketCap:</span>
          </h2>
          <h2>
            {coinStats.totalMarketCap} <span id="green">$</span>
          </h2>
        </div>
        <div className="stats" id="peti">
          <h2>
            <span id="white">Volume last 24h: </span>
          </h2>
          <h2>
            {coinStats.total24hVolume} <span id="green">$</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Stats;

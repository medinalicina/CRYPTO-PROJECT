import React from "react";
import './Card.css';

function Card({coin}) {



  return (
    <div className="card">
      <img src={coin.iconUrl}></img>
          <div className="title">{coin.name}</div>
          <p className="price">price: {coin.price}$</p>
          <p className="rank">rank: {coin.rank}</p>
        </div>

  )
}
 export default Card

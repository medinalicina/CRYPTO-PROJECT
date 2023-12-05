import React from 'react';
import './ExchangeStats.css';

function ExchangeStats({ exchanges }) {
  const price = parseFloat(exchanges.price);

  return (
    <div className='stats-content1'>
      <p>{exchanges.rank}.</p>
      <img src={exchanges.iconUrl} alt={exchanges.name}></img>
      <p>{exchanges.name}</p>
      <p id='price'>{price.toFixed(2)}</p>
    </div>
  );
}

export default ExchangeStats;

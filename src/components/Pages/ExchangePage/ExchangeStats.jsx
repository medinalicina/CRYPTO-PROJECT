import React from 'react'
import './ExchangeStats.css'
function ExchangeStats({exchanges}) {

  return (
    <div className='stats-content'>
        <p>{exchanges.rank}</p>
        <img src={exchanges.iconUrl}></img>
        <p>{exchanges.name}</p>
        <p>{exchanges.price}</p>
    </div>
  )
}

export default ExchangeStats
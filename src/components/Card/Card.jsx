import React from "react";
 

function Card() {


  return (
    <div className='container'>
      <div className='image'>
        <img src={coin.imageURL} alt="" />
      </div>
      <div className="card-content">
        <div className="wrapper">
          <div className="title">{coin.name}</div>
          <p className="price">{coin.price}$</p>
          <p className="rank">{coin.rank}</p>

        
        </div>
      </div>
    </div>
      
    
  )
}
 export default Card

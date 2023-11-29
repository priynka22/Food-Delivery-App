import React from 'react';
import food from "./Images/food.gif";

export default function OrderPlaced() {
  const orderId = Math.floor(Math.random() * 1000000) + 1; // Generate a random number

  return (
     <div className='border'>
    <div className='text-center order'>
      <h2>Order Successfully Placed!</h2> 
      <img src={food} className="imgIcon" alt="delivery" />
      <p>Order Id: <span>{orderId}</span></p>
    </div>
    </div>
  );
}

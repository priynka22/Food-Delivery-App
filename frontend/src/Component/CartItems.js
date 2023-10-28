import React from 'react';

export default function CartItems({ data}) {
  return (
    <>
      <div className='d-flex '>
        
        <div>{data.name}</div>
         <div className='ms-3' >Rs.{data.price}</div>
         <div className='ms-3'> 
              <button>-</button>
              <span>{data.quantity}</span>
              <button >+</button>
            </div>
       
        
      </div>
    </>
  );
}

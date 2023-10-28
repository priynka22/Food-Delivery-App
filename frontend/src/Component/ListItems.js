import React, { useState } from 'react';


export default function ListItems({ data, onAdd, onRemove }) {
 // const [count, setCount] = useState(0);
  


  const handleIncrement = () => {
    onAdd(data.id)
   // setCount(count+1)
  };
  
  const handleDecrement = () => {
    onRemove(data.id)
    /*if (count == 0) {
      return
    }

    if(count ==1)
    {
      onRemove(data.id)
    }
    setCount(count-1)*/
      
    };



  return (
    <>
      <div style={{ width: '18rem',height:'19rem'}} className="card" >
        <img src={data.img} className="card-img-top w-100 h-50" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{data.name}</h5>
          <p>Rs.{data.price}</p>
         
            {data.quantity < 1  ? (
            <button className="btn btn-outline-danger opacity-75" onClick={handleIncrement}>
              Add to cart
            </button>
          ) : (
            <>
            <div class="btn-group" role="group" >
            <button type="button" class="btn btn-outline-danger opacity-75" onClick={handleDecrement}>-</button>
              <span className="ms-3 me-3">{data.quantity}</span>
              <button type="button" class="btn btn-outline-danger opacity-75" onClick={handleIncrement}>+</button>
              </div>
              </>
          )}
       
        </div>
      </div>
  
    </>

  );
}

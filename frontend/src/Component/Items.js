import React, { useState } from 'react';

function Card({ data ,onAdd, onRemove}) {
 const [count, setCount] = useState(0);

  const increaseCount = () => {
    onAdd(data.id);
    setCount(count + 1);
  }

  const decreaseCount = () => {
    console.log("dec")
    if (count == 0) {
      return;
    }
   
      onRemove(data.id)
    
    
    setCount(count - 1);
      
  }

  return (
    <div className="card m-3" style={{ width: '17rem' }}>
      <img src={data.image} className="card-img-top" alt={data.altName} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.summary}</p>
        {count < 1 ? (
          <button className="btn btn-outline-secondary btn-sm" onClick={increaseCount}>Add to Cart</button>
        ) : (
          <div className="btn-group d-flex justify-content-between " role="group" aria-label="Basic example">
            <button className="btn btn-outline-secondary btn-sm" onClick={decreaseCount}>-</button>
            <span className='m-2'>{count}</span>
            <button className="btn btn-outline-secondary btn-sm" onClick={increaseCount}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

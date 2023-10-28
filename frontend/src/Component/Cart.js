import React from 'react';
import cartImage from './Images/cartImage.jpg';
import { useNavigate } from "react-router-dom";
import CartItems from './CartItems';

export default function Cart({ count, items }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='position-relative'>
        <img src={cartImage} className="img-fluid" alt="..." />
      </div>
      <div className='position-absolute top-50 cart translate-middlecart'>
        {count > 0 ? (
          <>
            <h5>ITEM(S) ADDED</h5>
            {items.map(item => {
              return <CartItems data={item} key={item.id} />;
            })}
             <span>Total amount: Rs.</span>
             <span>
              {
                items.reduce((previous,current)=> {
                  return previous + current.price * current.quantity
                },0)
              }
             </span>
             <br />
            <button className='btn btn-outline-secondary opacity-75'>Place order</button>
          </>
        ) : (
          <>
            <div>
              <h2>Cart is empty</h2>
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/Menu")}>Shop now</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

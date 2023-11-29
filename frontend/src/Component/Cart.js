import React from 'react';
import cartImage from './Images/cartImage.jpg';
import { useNavigate } from "react-router-dom";
import CartItems from './CartItems';

export default function Cart({ count, items }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='position-relative'>
        <img src={cartImage} className="img-fluid" alt="backgroundImg" />
      </div>
      <div className='position-absolute cart translate-middlecart'>
        {count > 0 ? (
          <>
          <div className='container-fluid'>
            <h5>ITEM(S) ADDED</h5>
            <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col" className="ms-3">Price</th>
          </tr>
        </thead>
        </table>
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
            <button className='btn btn-outline-secondary opacity-75' onClick={() => navigate("/OrderPlaced")}>Place order</button>
            </div>
          </>
        ) : (
          <>
            <div className='text-center '>
              <h1>Cart is empty</h1>
              <button type="button" className="btn btn-outline-secondary mt-3" onClick={() => navigate("/Menu")}>Shop now</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

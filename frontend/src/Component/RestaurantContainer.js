import React, { useState } from 'react';
import burgermenu from './Images/burgermenu.jpg';

export default function RestaurantContainer() {
  const [category, setCategory] = useState('All');

  return (
    <div className='border'>
      <div className="container border border-3 border-danger-subtle rounded offerTag">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 my-4 offerImage">
            <div className="mt-5 ms-3">
              <h1>Get 50% off</h1>
              <h4>Feel the joy of mouthwatering food</h4>
              <button className="mt-2 btn btn-warning opacity-75">Order now</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-4 offerImage">
            <img src={burgermenu} alt="food" className="img-fluid ms-5" />
          </div>
        </div>
      </div>
      <div className="text-center mt-5"><h5>Choose from popular categories</h5></div>
      <div className="container text-center mt-3 mb-3">
        <button className="btn-warning opacity-75 btn rounded border ms-3" onClick={() => setCategory('All')}>All</button>
        <button className="btn-warning opacity-75 btn rounded border ms-3" onClick={() => setCategory('Food')}>Food</button>
        <button className="btn-warning opacity-75 btn rounded border ms-3" onClick={() => setCategory('Beverages')}>Beverages</button>
      </div>
    </div>
  );
}

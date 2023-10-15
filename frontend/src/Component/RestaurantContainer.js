import React from 'react'
import Icon3 from './Icon3.jpg'
import food4 from './food4.jpg'

export default function RestaurantContainer() {
  return (
    <div>
       <div className="container border border-success rounded mt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 my-4 ">
            <div className="mt-5 ms-3">
              <h1>Get 50% off</h1>
              <h4>Feel the joy of mouthwatering food</h4>
              <button className="mt-2 btn btn-warning opacity-75">Order now</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <img src={Icon3} alt="food" className="img-fluid ms-5" />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 my-4">
            <img src={food4} alt="food" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="text-center mt-3"><h6>Choose from popular categories</h6></div>
      <div>
        <div className="container text-center mb-3 mt-3">
          <div className="row">
            <div className="col"><button className="btn-outline-secondary btn rounded border">All</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Burger</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Pizza</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Biryani</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Kebab</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Pasta</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Fish</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Icecream</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Soup</button></div>
            <div className="col"><button className="btn-outline-secondary btn rounded border">Shakes</button></div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

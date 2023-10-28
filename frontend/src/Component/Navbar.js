import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function({count,items,onHandleEvent}){

  const navigate = useNavigate();

    return(
<>
    <nav className="navbar navbar-expand-lg w-100 bg-transparent position-absolute z-1 pt-3" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink to="/" className="navbar-brand ms-3" ><h4>Foodie<FastfoodIcon/></h4></NavLink>
      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 navbar-nav-custom ">
        <li className="nav-item me-5 ms-5">
          <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink to="/Menu" className="nav-link" >Menu</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink  to="/About" className="nav-link" >About</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink to="/Contact" className="nav-link" >Contact</NavLink>
        </li>
        
    </ul>
         <button className='btn p-3' onClick={() => navigate("/Cart")}><ShoppingCartIcon/>{count}</button>
         <button className="btn btn-outline-danger opacity-75 me-5 rounded-pill" onClick={() => navigate("/Signin")}>Sign in</button>

    </div>
  </div>
</nav>
</>
    )
}
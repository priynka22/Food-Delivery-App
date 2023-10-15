import React,{useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Restaurant from './Component/Restaurant';
import RestaurantContainer from './Component/RestaurantContainer';
import Footer from './Component/Footer_1';
import About from './Component/About';

function App() {

  <Router>
    
        <Route path="/About" component={About} />
    </Router>

  const[cartItems, setCartItems] = useState(0)
 
  const handleAddItem =()=> {
     console.log('add item');
   setCartItems(cartItems+1)
  }

  const handleRemoveItem =()=>{
    console.log('Removing item');
    setCartItems(cartItems-1)
  }

  return (
    <>
      <Navbar count={cartItems}/>
     <RestaurantContainer/>
    <Restaurant onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>

    <Footer/>
      

    </>
  );
}

export default App;

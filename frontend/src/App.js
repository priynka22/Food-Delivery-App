import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Footer from './Component/Footer_1';
import Homepage from './Component/Homepage';
import Contact from './Component/Contact';
import Menu from './Component/Menu';
import Signin from './Component/Signin';
import Cart from './Component/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItems([...items]);
  };

  const handleRemoveItem = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItems([...items]);
  };

  return (
    <Router>
      <Navbar count={cartItems.length} items={cartItems} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Menu"
          element={<Menu onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />}
        />
        <Route path="/Cart" element={<Cart count={cartItems.length} items={cartItems} />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState,useEffect } from 'react';
import Card from './Items.js';
import axios from "axios";
import biryani from './Images/biryani.jpeg'
import burger from './Images/burger.jpeg'
import fish from './Images/fish.jpeg'
import pizza from './Images/pizza.jpeg'
import ramen from './Images/ramen.jpeg'
import icecream from './Images/icecream.jpeg'
import soup from './Images/soup.jpeg'
import kebab from './Images/kebab.jpeg'
import tea from './Images/tea.jpeg'




export default function Restaurant({onAddItem,onRemoveItem}) {

  const [items, setItems] = useState([]);

  const [product, setProduct] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/api/products'); 
        console.log(response.data);
        setProduct(response.data);
     
      } catch (error) {
        console.log(error);
        console.log("Something went wrong!!");
       
      }
    }
  
    fetchData();
  }, []);
  


  const handleAddItem=id=>{
    onAddItem();
  }

  const handleRemoveItem=id=>{
    
    onRemoveItem();
  }

 /* const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    const row = items.slice(i, i + 3);
    rows.push(row);
  }*/

  return (
<>
<div className='container'>
        {data.map(() => (
          <div className='row'>
            {data.map((item) => (
              <div key={item.id} className='col'>
                <Card onAdd={handleAddItem} onRemove={handleRemoveItem} data={item} />
              </div>
            ))}
          </div>
        ))}
      </div>

      
    </>
  );
}

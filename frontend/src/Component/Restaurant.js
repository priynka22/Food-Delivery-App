import React, { useState } from 'react';
import Card from './Card.js';
import biryani from './biryani.jpeg'
import burger from './burger.jpeg'
import fish from './fish.jpeg'
import pizza from './pizza.jpeg'
import ramen from './ramen.jpeg'
import icecream from './icecream.jpeg'
import soup from './soup.jpeg'
import kebab from './kebab.jpeg'
import tea from './tea.jpeg'



export default function Restaurant({onAddItem,onRemoveItem}) {

  const [items, setItems] = useState([
    {
      id: 0,
       image:biryani,
      alt: 'Biryani',
      title: 'Biryani',
      Summary: '',
    },
    {
      id: 1,
      image:pizza,
      alt: 'Pizza',
      title: 'Pizza',
      Summary: '',
    },
    {
      id: 2,
      image:fish,
      alt: 'Fish',
      title: 'Fish',
      Summary: '',
    },
    {
      id: 3,
      image:kebab,
      alt: 'Kebab',
      title: 'Kebab',
      Summary: '',
    },
    {
      id: 4,
      image:icecream,
      alt: 'Ice-cream',
      title: 'Ice-cream',
      Summary: '',
    },
    {
      id: 5,
      image:soup,
      alt: 'Soup',
      title: 'Soup',
      Summary: '',
    },
    {
      id: 6,
      image:burger,
      alt: 'Burger',
      title: 'Burger',
      Summary: '',
    },
    {
      id: 7,
      image:ramen,
      alt: 'Ramen',
      title: 'Ramen',
      Summary: '',
    },
    {
      id: 8,
      image:tea,
      alt: 'Tea',
      title: 'Tea',
      Summary: '',
    }
    
  ]);

  const handleAddItem=id=>{
    onAddItem();
  }

  const handleRemoveItem=id=>{
    
    onRemoveItem();
  }

  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    const row = items.slice(i, i + 3);
    rows.push(row);
  }

  return (
<>
<div className='container'>
        {rows.map((row, index) => (
          <div key={index} className='row'>
            {row.map((item) => (
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

import ListItems from './ListItems';
import { useState, useEffect } from 'react';
import RestaurantContainer from './RestaurantContainer';
import axios from 'axios';

export default function Menu({onAddItem,onRemoveItem}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleAddItem = id => {


    let data=[...items]
    let index = data.findIndex(i=>i.id === id)
    data[index].quantity +=  1
    setItems([...data])
    onAddItem(data[index])

  
  }

  const handleRemoveItem=id=>{
    
    let data=[...items]
    let index = data.findIndex(i=>i.id === id)
    if(data[index].quantity !== 0){
      data[index].quantity -=  1

      setItems([...data])
      onRemoveItem(data[index])
    }
  
}

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(`http://localhost:3001/api/products`);
        const data = response.data;
        const transformedData = data.map((item, index) => ({
          ...item,
          quantity:0,
          id: index,
        }));
        setLoading(false);
        setItems(transformedData);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchItems();

  }, []); 

 return  loading ? (
    <p>Loading..........</p>
  ) : (
    <>
      <RestaurantContainer />
      <div className='d-flex m-5'>
        {items.map((item) => (
          <ListItems onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

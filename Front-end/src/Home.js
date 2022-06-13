import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios'
import Item from './Item'
import Notifs from './Notifs'

export default function Home() {
  const backendURL = 'http://localhost:5000'
  
  const [items, setItems] = useState([]);

  const notifsRef = useRef();

  useEffect(() => {
    var getItems = async () => {
      var allItems = await Axios.get(backendURL + "/inventory/getItems");
      setItems(allItems.data.items)
    }
    getItems();
  })

  return (
    <div className='allItems'>
    {items.map(item => {
      return <>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
          
      <Notifs ref={notifsRef}/>
      </>

  })
  }
    </div>
  )
}

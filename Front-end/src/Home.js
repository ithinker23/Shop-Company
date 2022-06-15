import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Home() {

  const [items, setItems] = useState([]);
  const backendURL = 'http://localhost:5000';

  const [allFilters, setAllFilters] = useState({Classes:[], Colours:[]});

  async function getItems(allFilters) {
      var Items = await Axios.post(backendURL + "/inventory/getItems", allFilters);
      setItems(Items.data.items)
  }

  useEffect(() => {
      getItems(allFilters);
  },[allFilters])


  function handleSettingFilters(filters){
    setAllFilters(filters);
  }


  return (
    <>
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters}/>
        <AllItems items={items}/>
      </div>
    </>
  )
}

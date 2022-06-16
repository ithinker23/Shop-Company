import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams, useOutletContext } from "react-router-dom";
import Header from './Header'

export default function Home() {

  const backendURL = 'http://localhost:5000';

  const searchParams = useParams();
  var isAuth = useOutletContext();

  const [items, setItems] = useState([]);
  const [allFilters, setAllFilters] = useState({ Classes: [], Colours: [] });

  async function getItems(obj) {
    var Items = await Axios.post(backendURL + "/inventory/getItems", obj);
    console.log(Items.data.items)
    setItems(Items.data.items)
  }

  async function getUserDetails() {
    return null;
  }

  useEffect(() => {
    getUserDetails();
  })

  useEffect(() => {
    getItems(allFilters);
  }, [allFilters])


  function handleSettingFilters(filters) {
    setAllFilters(filters);
  }

  return (
    <>
      <Header isAuth={isAuth} username={searchParams.username} />
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters} />
        <AllItems items={items} />
      </div>
    </>
  )
}

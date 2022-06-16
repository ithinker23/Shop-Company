import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import {useParams, useOutletContext } from "react-router-dom";
import Header from './Header'

export default function Home() {
  
  var isAuth = useOutletContext();

  const searchParams = useParams();

  const [items, setItems] = useState([]);
  const backendURL = 'http://localhost:5000';

  const [allFilters, setAllFilters] = useState({ Classes: [], Colours: [] });

  async function getItems(allFilters) {
    var Items = await Axios.post(backendURL + "/inventory/getItems", allFilters);
    setItems(Items.data.items)
  }
  
  async function getUserDetails(){
    try{
    var logged = await Axios.post(backendURL + '/cookieAuth/home', {username:searchParams.username})
    } catch (err) {

    }
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
      <Header isAuth={isAuth} username={searchParams.username}/>
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters} />
        <AllItems items={items} />
      </div>
    </>
  )
}

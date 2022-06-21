import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './Header'

export default function Home() {

  const backendURL = 'http://localhost:5000';

  const [items, setItems] = useState([]);
  const [allFilters, setAllFilters] = useState({Class:"", Price: "", Colours: [], Search:"" });
  const [userCookie, setUserCookie] = useState()

  async function getItems(obj) {
    const response = await Axios.post(backendURL + "/inventory/getItems", obj);
    setItems(response.data.items)
  }

  async function authCookie() {
    try {
      const response = await Axios.get(backendURL + "/cookieAuth/checkUserCookie", {withCredentials:true})
      setUserCookie(response.data)
    }
    catch (err) {
      setUserCookie(err.response.data)
    }
  }

  useEffect(() => {
    authCookie()
  },[])

  useEffect(() => {
    getItems(allFilters);
    console.log(allFilters)
  }, [allFilters])

  function handleSettingFilters(filters) {
    setAllFilters(prevFilters => {
      prevFilters.Class = filters.Class
      prevFilters.Colours = filters.Colours
      prevFilters.Price = filters.Price
      return prevFilters;
    });
  }

  function handleSettingSearch(search){
    setAllFilters(prevFilters => {
      prevFilters.Search = search 
      return prevFilters
    })
  }

  return (
    <>
      <Header userInfo={userCookie} handleSettingSearch={handleSettingSearch}/>
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters} />
        <AllItems items={items} />
      </div>
    </>
  )
}

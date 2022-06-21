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
    console.log(allFilters)
    getItems(allFilters);
  }, [allFilters])

  function handleSettingFilters(filters) {

    let copyOfFIlters = {Class: allFilters.Class, Price: allFilters.Price, Colours: allFilters.Colours, Search:allFilters.Search };
    copyOfFIlters.Class = filters.Class
    copyOfFIlters.Colours = filters.Colours
    copyOfFIlters.Price = filters.Price
    setAllFilters(copyOfFIlters);
  }

  function handleSettingSearch(search){
    let copyOfFIlters = {Class: allFilters.Class, Price: allFilters.Price, Colours: allFilters.Colours, Search:allFilters.Search };
    copyOfFIlters.Search = search
    setAllFilters(copyOfFIlters)
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

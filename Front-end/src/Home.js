import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './Header'

export default function Home() {

  const backendURL = 'http://localhost:5000';

  const [items, setItems] = useState([]);
  const [allFilters, setAllFilters] = useState({ Classes: [], Colours: [] });
  const [userCookie, setUserCookie] = useState()

  async function getItems(obj) {
    const response = await Axios.post(backendURL + "/inventory/getItems", obj);
    setItems(response.data.items)
  }

  async function authCookie() {
    try {
      const response = await Axios.get(backendURL + "/cookieAuth/checkUserCookie", {withCredentials:true})
      setUserCookie(response.data)
      console.log(userCookie)
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
  }, [allFilters])

  function handleSettingFilters(filters) {
    setAllFilters(filters);
  }

  return (
    <>
      <Header userInfo={userCookie}/>
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters} />
        <AllItems items={items} />
      </div>
    </>
  )
}

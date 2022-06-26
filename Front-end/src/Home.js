import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './Header'

export default function Home() {

  const backendURL = 'http://localhost:5000';
  const [items, setItems] = useState([]);
  const [allFilters, setAllFilters] = useState({ Class: "", Price: null, Colours: [], Search: "" });
  const [userCookie, setUserCookie] = useState()
  const [cartIventory, setCartIventory] = useState()


// Function that awaits for a response from a request given to the back-end, this request is to retrieve all items that meet the filters
// try-catch is not needed as there will be no failing cases
  async function getItems(filters) {
    const response = await Axios.post(backendURL + "/inventory/getItems", filters);
    setItems(response.data.items)
  }

// Function that awaits for a response froma a request given to the back-end, this request is to authenticate cookies
// try-catch is needed as we need to handle errors where cookies dont exist, or if a cookie the user has does not match anything in the database
  async function authCookie() {
    try {
      const response = await Axios.get(backendURL + "/cookieAuth/checkUserCookie", { withCredentials: true })
      setUserCookie(response.data)
    }
    catch (err) {
      setUserCookie(err.response.data)
    }
  }

// Authenticates user of cookies, useEffect will make authCookie() run everytime the page loads
  useEffect(() => {
    authCookie()
  }, [])


  // retrieve all items that have met the filter requirements, useEffect will make getItems() run everytime the variable, allFilters, is changed
  useEffect(() => {
    getItems(allFilters);
  }, [allFilters])



// creates a copy 
  function handleSettingFilters(filters) {
    var copyOfFIlters = { Class: allFilters.Class, Price: allFilters.Price, Colours: allFilters.Colours, Search: allFilters.Search };
    copyOfFIlters.Class = filters.Class
    copyOfFIlters.Colours = filters.Colours
    copyOfFIlters.Price = filters.Price
    setAllFilters(copyOfFIlters);
  }

  function handleSettingSearch(search) {
    var copyOfFIlters = { Class: allFilters.Class, Price: allFilters.Price, Colours: allFilters.Colours, Search: allFilters.Search };
    copyOfFIlters.Search = search
    setAllFilters(copyOfFIlters)
  }
  
  
  //{id: id, Amount: amount}
  function handleSettingCartInventory(item){
    setCartIventory(prevInv => {
      
    })
  }


  return (
    <>
      <Header userInfo={userCookie} handleSettingSearch={handleSettingSearch} />
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters} />
        <AllItems items={items} />
      </div>
    </>
  )
}

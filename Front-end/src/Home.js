import AllItems from './AllItems'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './Header'
import Cart from './Cart'
export default function Home() {

  const backendURL = 'http://localhost:5000';

  const [cartState, setCartState] = useState(false);

  // List of objects
  // {}
  const [items, setItems] = useState([]);

  // List of objects
  // { Class: string', Price: number, Colours: [colours], Search: 'string' }
  const [allFilters, setAllFilters] = useState({ Class: "", Price: null, Colours: [], Search: "" });

  const [userCookie, setUserCookie] = useState()

  // List of objects
  // {ID:'number', Price:'number', Quantity: 'number'}
  const [cartInventory, setCartInventory] = useState([])

  // Function that awaits for a response from a request given to the back-end, this request is to retrieve all items that meet the filters
  // try-catch is not needed as there will be no failing cases
  async function getItems(filters) {
    try {
      const response = await Axios.post(backendURL + "/inventory/getItems", filters);
      setItems(response.data.items)
    } catch (err) {
      console.log(err)
    }
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


  // creates a copy filters because useEffect will only detect changes to filters' object as a whole.
  // by creating a copy it can also detect changes to the elements of the object
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

  // Given item = {ID:item.ID, Price:item.Price}
  function increaseQuant(item) {
    setCartInventory(currentItems => {
      if (currentItems.find(element => element.ID === item.ID) == null) {
        return ([...currentItems, { ID: item.ID,Name: item.Name,Photo:item.Photo, Price: item.Price, Quantity: 1 }])
      } else {
        return currentItems.map(element => {
          if (element.ID === item.ID) {
            return {...element, Quantity: element.Quantity + 1}
          } else {
            return element
          }})
      }
    })
  }

  function decreaseQuant(item) {
    setCartInventory(currentItems => {
      if (currentItems.find(element => element.ID === item.ID).Quantity === 1) {
        return currentItems.filter(element => element.ID !== item.ID)
      } else {
        return currentItems.map(element => {
          if (element.ID === item.ID) {
            return {...element, Quantity: element.Quantity - 1}
          } else {
            return element
          }
        })
      }
    })
  }

  function toggleCart(){
    setCartState(bool => {
      return !bool;
    })
  }


useEffect (() => {
  console.log(cartInventory)
})
  
  return (
    <>
      <Header userInfo={userCookie} handleSettingSearch={handleSettingSearch} toggleCart={toggleCart}/>
      <div className='homePage'>
        <Filter handleSettingFilters={handleSettingFilters} />
        <AllItems items={items} increaseQuant={increaseQuant} decreaseQuant={decreaseQuant} cartInventory={cartInventory}/>
        <Cart cartInventory={cartInventory} cartState={cartState} decreaseQuant={decreaseQuant} increaseQuant={increaseQuant}/>
      </div>
    </>
  )
}

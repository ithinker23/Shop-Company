import React, { useRef } from 'react'

export default function Filter({ handleSettingFilters }) {

  //Class Refs
  const classInputRef = useRef();

  //Prices Refs
  const price200InputRef = useRef();
  const price150InputRef = useRef();
  const price100InputRef = useRef();
  const price50InputRef = useRef();

  //Colours Refs  
  const blackInputRef = useRef();
  const orangeInputRef = useRef();
  const brownInputRef = useRef();

  function formatFilters() {
    // = format all filters into an array useable by handleSettingFilters() eg {Classes: ["Shirt", "Pants"], Colours: ["Brown","Black"]}
    var filters = { Class: "", Price: "", Colours: [] }

    filters.Class = classInputRef.current.value;

    if (price200InputRef.current.checked) { filters.Price = "< 200" }
    else if (price150InputRef.current.checked) { filters.Price = "> 150" }
    else if (price100InputRef.current.checked) { filters.Price = "> 100" }
    else if (price50InputRef.current.checked) { filters.Price = "> 200" }

    if (blackInputRef.current.checked) filters.Colours.push("Black")
    if (orangeInputRef.current.checked) filters.Colours.push("Orange")
    if (brownInputRef.current.checked) filters.Colours.push("Brown")

    handleSettingFilters(filters)
  }

  function removeFilters() {

    price200InputRef.current.checked = false
    price150InputRef.current.checked = false
    price100InputRef.current.checked = false
    price50InputRef.current.checked = false
    blackInputRef.current.checked = false
    orangeInputRef.current.checked = false
    brownInputRef.current.checked = false

    handleSettingFilters({ Class: "", Price: "", Colours: [] })

  }
  return (
    <>
      <div className="filterContainer">
        <div className='filterGroupHeader'>Class</div>
        <div className='filterGroup'>
          <div className="dropdownInputContainer">
            
            <select name="classSelector" className='dropdownInput' ref={classInputRef}>
              <option value="*">All Classes</option>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Wallets">Wallets</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>
        </div>
        <div className='filterGroupHeader'>Price</div>
        <div className='filterGroup'>

          <div className='filterInput'>

            <input type='radio' name="price" ref={price200InputRef} />
            <div className='inputLabel'> 200 + </div>
          </div>
          <div className='filterInput'>

            <input type='radio' name="price" ref={price150InputRef} />
            <div className='inputLabel'> Below 150</div>
          </div>
          <div className='filterInput'>

            <input type='radio' name="price" ref={price100InputRef} />
            <div className='inputLabel'>Below 100</div>
          </div>
          <div className='filterInput'>

            <input type='radio' name="price" ref={price50InputRef} />
            <div className='inputLabel'>Below 50</div>
          </div>
        </div>

        <div className='filterGroupHeader'>COLOURS</div>
        <div className='filterGroup'>
          <div className='filterInput'>
            <input type='checkbox' ref={blackInputRef} />
            <div className='inputLabel'>Black</div>
          </div>
          <div className='filterInput'>
            <input type='checkbox' ref={orangeInputRef} />
            <div className='inputLabel'>Orange</div>
          </div>
          <div className='filterInput'>
            <input type='checkbox' ref={brownInputRef} />
            <div className='inputLabel'>Brown</div>
          </div>
        </div>

        <div className='button filterButton applyFilterButton' onClick={formatFilters}>
          <div className="slide"></div>
          <div className='buttonText'>Apply Filters</div>
        </div>
        <div className='button filterButton removeFilterButton' onClick={removeFilters}>
          <div className="slide"></div>
          <div className='buttonText'> Remove Filters</div>
        </div>
      </div>
    </>
  )
}

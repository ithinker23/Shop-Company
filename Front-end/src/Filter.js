import React, { useRef } from 'react'

export default function Filter({ handleSettingFilters }) {

  //Classes Refs
  const shirtsInputRef = useRef();
  const walletInputRef = useRef();
  const pantsInputRef = useRef();
  const shoesInputRef = useRef();

  //Colours Refs  
  const blackInputRef = useRef();
  const orangeInputRef = useRef();
  const brownInputRef = useRef();

  function formatFilters() {
    // = format all filters into an array useable by handleSettingFilters() eg {Classes: ["Shirt", "Pants"], Colours: ["Brown","Black"]}
    var filters = { Classes: [], Colours: [] }

    if(shirtsInputRef.current.checked) filters.Classes.push("Shirts")
    if(walletInputRef.current.checked) filters.Classes.push("Wallet")
    if(pantsInputRef.current.checked) filters.Classes.push("Pants")
    if(shoesInputRef.current.checked) filters.Classes.push("Shoes")

    if(blackInputRef.current.checked) filters.Colours.push("Black")
    if(orangeInputRef.current.checked) filters.Colours.push("Orange")
    if(brownInputRef.current.checked) filters.Colours.push("Brown")

    handleSettingFilters(filters)
  }

  return (
    <>
      <div className="filterContainer">

        <div>CLASSES</div>
        <div className='filterCheckBox'>
          Shirt
          <input type='checkbox' ref={shirtsInputRef}/>
        </div>
        <div className='filterCheckBox'>
          Wallet
          <input type='checkbox' ref={walletInputRef}/>
        </div>
        <div className='filterCheckBox'>
          Pants
          <input type='checkbox' ref={pantsInputRef}/>
        </div>
        <div className='filterCheckBox'>
          Shoes
          <input type='checkbox' ref={shoesInputRef}/>
        </div>




        <div>COLOURS</div>
        <div className='filterCheckBox'>
          Black
          <input type='checkbox' ref={blackInputRef}/>
        </div>
        <div className='filterCheckBox'>
          Orange
          <input type='checkbox' ref={orangeInputRef}/>
        </div>
        <div className='filterCheckBox'>
          Brown
          <input type='checkbox' ref={brownInputRef}/>
        </div>


        <button onClick={formatFilters}>APPLY FILTERS</button>
      </div>
    </>
  )
}

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

    if (shirtsInputRef.current.checked) filters.Classes.push("Shirts")
    if (walletInputRef.current.checked) filters.Classes.push("Wallet")
    if (pantsInputRef.current.checked) filters.Classes.push("Pants")
    if (shoesInputRef.current.checked) filters.Classes.push("Shoes")

    if (blackInputRef.current.checked) filters.Colours.push("Black")
    if (orangeInputRef.current.checked) filters.Colours.push("Orange")
    if (brownInputRef.current.checked) filters.Colours.push("Brown")

    handleSettingFilters(filters)
  }

  return (
    <>
      <div className="filterContainer">

        <div className='filterGroupHeader'>CLASSES</div>
        <div className='filterGroup'>
          <div className='filterCheckBox'>

            <input type='checkbox' ref={shirtsInputRef} />
            <div className='inputCheckboxLabel'>Shirt</div>
          </div>
          <div className='filterCheckBox'>

            <input type='checkbox' ref={walletInputRef} />
            <div className='inputCheckboxLabel'>Wallet</div>
          </div>
          <div className='filterCheckBox'>

            <input type='checkbox' ref={pantsInputRef} />
            <div className='inputCheckboxLabel'>Pants</div>
          </div>
          <div className='filterCheckBox'>

            <input type='checkbox' ref={shoesInputRef} />
            <div className='inputCheckboxLabel'>Shoes</div>
          </div>
        </div>




        <div className='filterGroupHeader'>COLOURS</div>
        <div className='filterGroup'>
          <div className='filterCheckBox'>
            <input type='checkbox' ref={blackInputRef} />
            <div className='inputCheckboxLabel'>Black</div>
          </div>
          <div className='filterCheckBox'>
            <input type='checkbox' ref={orangeInputRef} />
            <div className='inputCheckboxLabel'>Orange</div>
          </div>
          <div className='filterCheckBox'>
            <input type='checkbox' ref={brownInputRef} />
            <div className='inputCheckboxLabel'>Brown</div>
          </div>
        </div>


        <div className='button filterButton' onClick={formatFilters}>
          <div className="slide"></div>
          <div className='buttonText'>Apply Filters</div>
        </div>
      </div>
    </>
  )
}

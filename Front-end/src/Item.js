import React, { useRef } from 'react'


export default function Item({ item, increaseQuant, decreaseQuant, itemQuant }) {

  const itemPreviewRef = useRef();

  return (
    <>
      <div className='itemDiv' onClick={() => {
        setTimeout(() => {
          itemPreviewRef.current.style.display = "block";
        }, 100)
      }}>
        <div className='itemImagePreviewContainer' >
          <img className="itemImagePreview" src={item.Photo} alt='of product'></img>
        </div>
        <div className='itemDivDesc'>
          <div className='itemDivTitle'>{item.Name}<div className='itemDivPrice'>${item.Price}</div></div>
          <div className='itemDivClass'>{item.Class}</div>
          <div className='itemDivColours'>{item.Colours}</div>
        </div>
      </div>
      <div ref={itemPreviewRef} className='itemPopupPreviewContainer'>
        <div className='itemPopupPreview'>
          <div className='itemPopupClose' onClick={() => { itemPreviewRef.current.style.display = "none"; }}>x</div>
          <div className='itemPopupImageContainer'><img className="itemPopupImage" src={item.Photo} alt="itemPhoto"></img></div>
          <div className='itemPopupName'>{item.Name}
            <div className='itemPopupPrice'>${item.Price}</div>
            <div className='itemPopupClass'>{item.Class}</div>
            <button className='buttonCart' onClick={()=>{
              console.log(item.Price)
              decreaseQuant(item)
            }}> - </button>
            <div>{itemQuant}</div>
            <button className='buttonCart' onClick={()=>{
              increaseQuant(item)
            }}> + </button>
          </div>
          <div className='itemPopupDesc'>
            {item.Description}
          </div>
        </div>
      </div>
    </>

  )
}
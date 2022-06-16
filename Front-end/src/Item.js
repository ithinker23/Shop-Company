import React from 'react'


export default function Item({ item }) {
  return (
    <>
      <div className='itemDiv'>
        <img className="itemImagePreview" src={item.Photo} alt='of product'></img>
        <div className='itemDivDesc'>
          <div className='itemDivTitle'>{item.Name}<div className='itemDivPrice'>${item.Price}</div></div>
          <div className='itemDivClass'>{item.Class}</div>
          <div className='itemDivColours'>{item.Colours}</div>
        </div>
      </div>
      <div className='itemPopupPreviewContainer'>
        <div className='itemPopupPreview'>
          <div className='itemPopupImageContainer'>IMAGE</div>
          <div className='itemPopupName'>{item.Name}</div>
          <div className='itemPopupDesc'>Desc</div>
        </div>
      </div>
    </>

  )
}

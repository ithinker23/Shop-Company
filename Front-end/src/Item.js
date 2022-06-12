import React from 'react'


export default function Item({item}) {
  return (
    <div className='itemDiv'>
        <img src={item.Photo} alt='of product'></img>
        <div className='itemDivTitle'>{item.Name}</div>
    </div>
  )
}

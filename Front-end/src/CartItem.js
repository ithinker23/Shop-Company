import React, { useEffect } from 'react'


export default function CartItem ({cartItem, increaseQuant, decreaseQuant}) {
    useEffect(() => {
        console.log(cartItem)
    })
    return (
    <>
        <div className='cartItem'>
            <div className='cartItemName'>
            {cartItem.Name} x {cartItem.Quantity}
            </div>
            <div className='cartItemPrice'>
            ${cartItem.Price * cartItem.Quantity}
            </div>
            <div className='buttonCartContainer'>
              <button className='buttonCart' onClick={() => {
                decreaseQuant({ID: cartItem.ID, Name: cartItem.Name, Photo:cartItem.Photo, Price: cartItem.Price})
              }}> - </button>
              <div className='itemQuantity'>{cartItem.Quantity}</div>
              <button className='buttonCart' onClick={() => {
                increaseQuant({ID: cartItem.ID, Name: cartItem.Name, Photo:cartItem.Photo, Price: cartItem.Price})
              }}> + </button>
            </div>
        </div>
    </>)
}
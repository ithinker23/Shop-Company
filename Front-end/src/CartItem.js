import React, {useEffect} from 'react'


export default function CartItem ({cartItem}) {

    useEffect(() => {
      console.log(cartItem)
    })
    
    return (
    <>
        <div className='cartItem'>
            <div className='cartItemName'>
            {cartItem.Name}
            </div>
            <div className='cartItemPrice'>
            {cartItem.Price}
            </div>
            <div className='cartItemQuantity'>
            {cartItem.Quantity}
            </div>
        </div>
    </>)
}
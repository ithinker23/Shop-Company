import React from 'react'


export default function CartItem ({cartItem}) {
    return (
    <>
        <div className='cartItem'>
            <div className='cartItemName'>
            {cartItem.Name} x {cartItem.Quantity}
            </div>
            <div className='cartItemPrice'>
            ${cartItem.Price * cartItem.Quantity}
            </div>
        </div>
    </>)
}
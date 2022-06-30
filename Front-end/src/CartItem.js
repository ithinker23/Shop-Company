import React from 'react'


export default function CartItem ({cartItem}) {

    return (
    <>
        <div>
            {cartItem.Name}
            <br></br>
            {cartItem.Price}
            <br></br>
            {cartItem.Quantity}
        </div>
    </>)
}
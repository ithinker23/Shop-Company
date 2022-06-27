import React,{useEffect} from 'react'


export default function CartItem ({cartItem}) {

    return (
    <>
        <div>
            {cartItem.Name}
            {cartItem.Price}
        </div>
    </>)
}
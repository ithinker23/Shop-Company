import { useEffect, useRef } from 'react'
import CartItem from './CartItem'

export default function Cart({ cartInventory }) {

    const cartPopoutRef = useRef();

    useEffect(() => {
        console.log(cartInventory)
    }, [cartInventory])

    return (
        <>
            <div className='cart' ref={cartPopoutRef}>
                {cartInventory.map(cartItem => {
                return (
                    <CartItem cartItem={cartItem} />
                 )
                })}
            </div>
        </>)
}
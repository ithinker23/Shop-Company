import { useEffect, useRef } from 'react'
import CartItem from './CartItem'

export default function Cart({ cartInventory, cartState }) {

    const cartPopoutRef = useRef();

    useEffect(()=>{
        if(cartState){
            cartPopoutRef.current.style.right = "0"
        }else{
            cartPopoutRef.current.style.right = "-105%"
        }
    },[cartState])

    return (
        <>
            <div className='cartContainer'>
                <div className='cart' ref={cartPopoutRef}>
                <div className='cartHeader'>CART</div>
                <div className='cartItems'>
                {cartInventory.map(cartItem => {
                return (
                    <CartItem cartItem={cartItem} />
                 )
                })}
                </div>
                <div className='cartFooter'></div>
                </div>
            </div>
        </>)
}
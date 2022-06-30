import { useEffect, useRef } from 'react'
import CartItem from './CartItem'

export default function Cart({ cartInventory, cartState }) {

    const cartPopoutRef = useRef();

    useEffect(() => {
        console.log(cartInventory)
    }, [cartInventory])

    useEffect(()=>{
        if(cartState){
            cartPopoutRef.current.style.right = "-105%"
        }else{
            cartPopoutRef.current.style.right = "0"
        }
    },[cartState])

    return (
        <>
            <div className='cart'>
                <div className='cartItemsList' ref={cartPopoutRef}>
                <div className='cartHeader'>CART</div>
                {cartInventory.map(cartItem => {
                return (
                    <CartItem cartItem={cartItem} />
                 )
                })}
                </div>
            </div>
        </>)
}
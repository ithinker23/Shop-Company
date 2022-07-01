import { useEffect, useRef } from 'react'
import CartItem from './CartItem'

export default function Cart({ cartInventory, cartState, decreaseQuant, increaseQuant }) {

    const cartPopoutRef = useRef();

    useEffect(()=>{
        if(cartState){
            cartPopoutRef.current.style.right = "0"
        }else{
            cartPopoutRef.current.style.right = "-105%"
        }
    },[cartState])

    function subtotalCalc() {
        var subtotal = 0

        for (let x=0; x<cartInventory.length; x++) {
            subtotal += cartInventory[x].Quantity * cartInventory[x].Price
        }

        return subtotal.toFixed(2)
    }

    return (
        <>
            <div className='cartContainer'>
                <div className='cart' ref={cartPopoutRef}>
                <div className='cartHeader'>CART</div>
                <div className='cartItems'>
                {cartInventory.map(cartItem => {
                return (
                    <CartItem cartItem={cartItem} increaseQuant={increaseQuant} decreaseQuant={decreaseQuant}/>
                 )
                })}
                </div>
                <div className='cartFooter'>
                    <div className='cartFooterText'>
                        SUBTOTAL: ${subtotalCalc()}
                    </div>
                </div>
                </div>
            </div>
        </>)
}
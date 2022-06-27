import { useState, useEffect } from 'react'
import CartItem from './CartItem'

export default function Cart({ cartInventory }) {

    var [filteredCart, setFilteredCart] = useState(cartInventory)

    console.log(cartInventory)

    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    useEffect(() => {
        setFilteredCart(getUniqueListBy(cartInventory, 'Name'))
    }, [cartInventory])

    return (
        <>
            <div className='cart'>
                {filteredCart.map(cartItem => {
                return (
                    <CartItem cartItem={cartItem} />
                 )
                })}
            </div>
        </>)
}
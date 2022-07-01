import React, { useRef, useEffect } from 'react'
import Item from './Item';
import Notifs from './Notifs';

export default function AllItems({ items, decreaseQuant, increaseQuant, cartInventory }) {

    const notifsRef = useRef();
    const allItemsRef = useRef();

    return (
        <>
            <div ref = {allItemsRef} className='allItems'>
                {items.map(item => {
                    var cartInformation = cartInventory.find(cartItem => cartItem.ID === item.ID)
                    cartInformation = cartInformation? cartInformation.Quantity : 0
                    return <>
                        <Item item={item} increaseQuant={increaseQuant} decreaseQuant={decreaseQuant} cartInformation={cartInformation}/>
                    </>
                })
                }
            </div>
            <Notifs ref={notifsRef} />
        </>
    )
}

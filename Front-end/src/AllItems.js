import React, { useRef } from 'react'
import Item from './Item';
import Notifs from './Notifs';

export default function AllItems({ item, decreaseQuant, increaseQuant, itemQuant }) {

    const notifsRef = useRef();
    const allItemsRef = useRef();

    return (
        <>
            <div ref = {allItemsRef} className='allItems'>
                {item.map(item => {
                    return <>
                        <Item itemQuant={itemQuant} increaseQuant={increaseQuant} decreaseQuant={decreaseQuant} item={item}/>
                    </>
                })
                }
            </div>
            <Notifs ref={notifsRef} />
        </>
    )
}
